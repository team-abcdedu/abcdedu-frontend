import { FormEvent } from 'react';

import { surveyInfo } from '../../constants/surveyInfo';

function SurveyItem({
  id,
  type,
  options,
}: {
  id: string;
  type: string;
  options: string[];
}) {
  if (type === 'textarea') {
    return (
      <textarea
        className={'min-h-[150px] p-6 font-normal'}
        placeholder={'답안 입력하기'}
        name={id}
      ></textarea>
    );
  }
  if (type === 'radio') {
    return (
      <fieldset className={'flex flex-col font-normal'}>
        {options.map(option => (
          <label key={option} className={'flex gap-10'}>
            <input type='radio' value={option} name={id} />
            {option}
          </label>
        ))}
      </fieldset>
    );
  }
  return null;
}

function SurveyForm({ classTitle }: { classTitle: string }) {
  const formTextStyle = 'text-16 md:text-20';

  const requiredList = surveyInfo(classTitle.replace('\n', ' '))
    .filter(q => q.required)
    .map(q => q.index);

  console.log(requiredList);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formData = new FormData(e.target as HTMLFormElement);
    // const formEntries = Array.from(formData.entries());
  };

  return (
    <form
      className={
        'w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100'
      }
      onSubmit={submitHandler}
    >
      <div className={'min-w-[140px] md:min-w-[700px] flex flex-col gap-20'}>
        <div
          className={'w-full min-h-[140px] flex-col-center gap-20 break-keep'}
        >
          <h2 className={'w-full text-30 md:text-40 font-bold text-start'}>
            [수업 만족도 조사] {classTitle}
          </h2>
          <p className={`${formTextStyle}`}>
            안녕하세요. &quot;중고등학생을 위한 데이터 사이언스&quot; 교육
            서비스를 제공하는 ABCDEdu입니다.
            <br />[{classTitle}] 수업을 수강해주신 학생 분들께 진심으로
            감사하다는 말씀 드립니다.
            <br />
            <br /> 본 수업은 딥러닝을 구현하기 위해 수학이 어떻게 활용되는가에
            대해 알아보는 프로그램으로, 인공지능과 관련된 일을 하기 위해
            구체적으로 어떤 수학을 어떻게 공부해야 하는지에 대하여 탐구함으로써,
            학교 수학을 공부하는 의미를 찾고 진로를 탐색하는 기회를 갖는
            시간이었습니다.
            <br />
            <br /> 본 수업의 발전을 위해 아래와 같은 설문 조사에 응해주시면
            감사하겠습니다.
          </p>
          <div className={`w-full ${formTextStyle} font-semibold`}>
            * 표시는 필수 입력 항목입니다.
          </div>
          <ul className={'w-full text-15 font-semibold list-disc list-inside'}>
            <span>[문의]</span>
            <li>이메일 : abcdedu@abcdedu.com</li>
            <li>인스타 : abcd_education</li>
          </ul>
        </div>

        <div className={'w-full mt-30 flex flex-col gap-40'}>
          {surveyInfo(classTitle.replace('\n', ' ')).map(q => (
            <label
              key={q.index}
              className={`w-full flex flex-col gap-20 ${formTextStyle} font-semibold`}
            >
              <span className={'whitespace-pre-wrap'}>
                {q.index ? `${q.index}.` : ``} {q.question}
                <span className={'font-bold text-red-500'}>
                  {q.required && ' *'}
                </span>
              </span>
              <SurveyItem
                id={q.index}
                type={q.type}
                options={q.options || []}
              />
            </label>
          ))}
        </div>
        <button
          className={
            'min-w-[150px] min-h-[50px] mt-30 self-center rounded-[10px] bg-primary-300'
          }
        >
          <span className={`${formTextStyle} text-white`}>제출하기</span>
        </button>
      </div>
    </form>
  );
}

export default SurveyForm;
