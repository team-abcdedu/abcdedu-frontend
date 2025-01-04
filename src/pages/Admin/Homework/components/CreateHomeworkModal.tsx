import { X } from '@phosphor-icons/react';
import { FormEvent, useEffect, useRef } from 'react';
import {
  SubmitHandler,
  useFieldArray,
  useForm,
  UseFormRegister,
} from 'react-hook-form';

import Modal from '@/components/Modal';
import RequiredMark from '@/components/RequiredMark';
import { HomeworkQuestion } from '@/types/homework';

interface CreateHomeworkModalProps {
  isVisible: boolean;
  onClose: () => void;
}

type QuestionCreation = Omit<HomeworkQuestion, 'orderNumber'>;

type QuestionCreationKeys = keyof QuestionCreation;

interface ICreateHomeworkFormValues {
  title: string;
  description: string;
  additionalDescription: string;
  questions: QuestionCreation[];
}

type FormKeys =
  | keyof ICreateHomeworkFormValues
  | `questions.${number}`
  | `questions.${number}.${QuestionCreationKeys}`;

interface AutoResizeTextareaProps {
  register: UseFormRegister<ICreateHomeworkFormValues>;
  name: FormKeys;
  required?: boolean;
  placeholder?: string;
  style?: string;
}

function AutoResizeTextarea({
  register,
  name,
  required = false,
  placeholder = '내용을 입력해주세요',
  style = '',
}: AutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const autoResize = (e: FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;

    // 높이를 초기화한 후 scrollHeight에 맞춰 높이 설정
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  };

  console.log(name);

  return (
    <textarea
      {...register(name, { required })}
      ref={textareaRef}
      placeholder={placeholder}
      onInput={autoResize}
      rows={1}
      className={`w-full border-1 overflow-y-hidden text-center bg-neutral-50 ${style}`}
    />
  );
}

function CreateHomeworkModal({ isVisible, onClose }: CreateHomeworkModalProps) {
  const { control, register, handleSubmit } =
    useForm<ICreateHomeworkFormValues>({
      defaultValues: {
        questions: [
          {
            content: '123',
            isAnswerRequired: true,
            additionalContent: 'hi',
          },
        ],
      },
    });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const formTextStyle = 'text-16 md:text-20 whitespace-pre-wrap';

  const onSubmit: SubmitHandler<ICreateHomeworkFormValues> = (
    data: ICreateHomeworkFormValues,
  ) => {
    console.log(11);
    console.log(data);
  };

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  return (
    <Modal isVisible={isVisible} onClose={onClose} size={'lg'}>
      <Modal.Header>
        <button
          type='button'
          className='absolute top-12 right-12'
          onClick={onClose}
          aria-label={'close-modal'}
        >
          <X size={20} />
        </button>
        <button
          type={'submit'}
          form={'create-homework-form'}
          className={'border-1 bg-primary-200'}
        >
          과제 생성하기
        </button>
      </Modal.Header>
      <Modal.Content>
        <form
          id={'create-homework-form'}
          onSubmit={handleSubmit(onSubmit)}
          className={'w-[90vw] h-full overflow-y-scroll'}
        >
          <div
            className={
              'w-full min-h-[600px] px-30 flex-col-center gap-40 text-center break-keep'
            }
          >
            <h1 className={'w-full'}>
              <div className={'text-30 md:text-50 font-bold text-primary-300'}>
                <AutoResizeTextarea
                  register={register}
                  name={'title'}
                  required={true}
                  placeholder={'과제 제목을 입력해주세요(필수)'}
                />
              </div>
            </h1>
            <h2 className={`w-full text-18 md:text-22 font-semibold`}>
              <AutoResizeTextarea
                register={register}
                name={'description'}
                required={true}
                placeholder={'과제에 대한 설명을 입력해주세요(필수)'}
              />
            </h2>
            <p className={`w-full text-16 md:text-20 whitespace-pre-wrap`}>
              <AutoResizeTextarea
                register={register}
                name={'additionalDescription'}
                placeholder={'추가 설명이 필요하다면 입력해주세요'}
              />
            </p>
          </div>

          <div
            className={`w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100 ${formTextStyle}`}
          >
            <div
              className={
                'w-full min-w-[140px] md:min-w-[700px] flex flex-col gap-20'
              }
            >
              <div className={`w-full ${formTextStyle} font-semibold`}>
                <RequiredMark /> 표시는 필수 입력 항목입니다.
              </div>

              <div className={'py-30 flex flex-col gap-40'}>
                {fields.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className={'w-full flex flex-col gap-30'}
                    >
                      <div className={`w-full flex flex-col gap-20`}>
                        <div className={'w-full font-semibold flex'}>
                          <span>{index + 1}. </span>
                          <AutoResizeTextarea
                            register={register}
                            name={`questions.${index}.content`}
                            required={true}
                            placeholder={'질문을 입력해주세요(필수)'}
                            style={'text-start px-5'}
                          />
                          {/* 필수 질문 여부 체크 필요 */}
                          {/* {question.isAnswerRequired && <RequiredMark />} */}
                        </div>
                        <div className={'flex flex-col gap-10 font-light'}>
                          <AutoResizeTextarea
                            register={register}
                            name={`questions.${index}.additionalContent`}
                            placeholder={
                              '질문에 대한 추가 설명(줄바꿈 시 실제 화면에서는 들여쓰기가 적용됩니다)'
                            }
                            style={'indent-[10px] break-keep text-start'}
                          />
                        </div>
                      </div>
                      <div className={'w-full h-fit flex flex-col gap-10'}>
                        <textarea
                          className={
                            'w-full min-h-[150px] p-10 font-normal text-neutral-300'
                          }
                          value={'답안 입력하기'}
                          readOnly
                        />
                      </div>

                      <button
                        className={'border-1'}
                        onClick={() =>
                          append({
                            content: '',
                            isAnswerRequired: true,
                            additionalContent: '',
                          })
                        }
                      >
                        append
                      </button>
                      <button
                        className={'border-1'}
                        onClick={() => remove(index)}
                      >
                        remove
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className={`w-full flex flex-col gap-20`}>
                <div className={'font-semibold'}>[토론 및 발표]</div>
                <p className={'indent-[10px] font-light whitespace-pre-wrap'}>
                  위에서 적은 내용을 친구들과 공유하고 토론해보자. 그리고 생각을
                  가다듬고 정리해서 자신 있게 발표해보자.
                </p>
              </div>

              <button
                className={`min-w-[150px] min-h-[50px] mt-30 self-center rounded-[10px] text-white bg-primary-400 cursor-pointer`}
                disabled
              >
                제출하기
              </button>
            </div>
          </div>
        </form>
      </Modal.Content>
    </Modal>
  );
}

export default CreateHomeworkModal;
