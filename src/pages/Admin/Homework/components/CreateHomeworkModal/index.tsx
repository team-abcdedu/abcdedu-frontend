import { X } from '@phosphor-icons/react';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import HomeworkForm from '@/components/HomeworkForm';
import Modal from '@/components/Modal';

import useCreateHomeworkForm, {
  ICreateHomeworkFormValues,
} from '../../hooks/useCreateHomeworkForm';

import HomeworkDetails from './HomeworkDetails';
import HomeworkQuestions from './HomeworkQuestions';

interface CreateHomeworkModalProps {
  isVisible: boolean;
  onClose: () => void;
}

function CreateHomeworkModal({ isVisible, onClose }: CreateHomeworkModalProps) {
  const { register, control, handleSubmit, errors, getPreviewHomework } =
    useCreateHomeworkForm();
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const formTextStyle = 'text-16 md:text-20';

  const onSubmit: SubmitHandler<ICreateHomeworkFormValues> = (
    data: ICreateHomeworkFormValues,
  ) => {
    console.log(data);
  };

  const modeStyle = (type: 'edit' | 'preview') => {
    if (type === 'edit') {
      return isPreviewMode ? 'hidden' : '';
    }
    return isPreviewMode ? '' : 'hidden';
  };

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
      </Modal.Header>
      <Modal.Content>
        <div
          className={
            'w-[90vw] h-full overflow-y-scroll break-keep whitespace-pre-wrap'
          }
        >
          <form
            id={'create-homework-form'}
            onSubmit={handleSubmit(onSubmit)}
            className={`${modeStyle('edit')} w-full h-full`}
          >
            <HomeworkDetails register={register} errors={errors} />
            <div
              className={`w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100 ${formTextStyle}`}
            >
              <div
                className={
                  'w-full min-w-[140px] md:min-w-[700px] flex flex-col gap-20'
                }
              >
                <HomeworkQuestions
                  register={register}
                  control={control}
                  errors={errors}
                />
              </div>
            </div>
          </form>

          <div className={`${modeStyle('preview')} w-full h-full`}>
            <HomeworkForm
              mode={'admin-preview'}
              previewHomework={getPreviewHomework()}
            />
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button
          type={'button'}
          className={'w-full h-40 bg-primary-50'}
          onClick={() => setIsPreviewMode(!isPreviewMode)}
        >
          {isPreviewMode ? '수정하기' : '미리보기'}
        </button>
        <button
          type={'submit'}
          form={'create-homework-form'}
          className={'w-full h-40 bg-primary-100 text-white'}
        >
          생성하기
        </button>
      </Modal.Actions>
    </Modal>
  );
}

export default CreateHomeworkModal;
