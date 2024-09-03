import { AssignmentInfo } from '../../types/classTypes';

const studentInfoInputs = [
  { label: '학교', id: 'school-name' },
  { label: '학번', id: 'student-number' },
  { label: '이름', id: 'student-name' },
];

function AssignmentForm({
  assignmentInfo,
  readOnly,
}: {
  assignmentInfo: AssignmentInfo;
  readOnly: boolean;
}) {
  const { title, topic, description, questions } = assignmentInfo;

  const formTextStyle = 'text-16 md:text-20';
  const labelStyle = `w-full flex flex-col ${formTextStyle} font-semibold`;
  const inputStyle =
    'max-w-[300px] h-36 p-6 border-b-2 border-neutral-300 bg-neutral-100 text-20';

  return (
    <form
      className={
        'w-full h-max mb-[40px] py-[70px] px-[50px] md:py-[100px] md:px-[170px] flex-col-center gap-70 self-center bg-neutral-100'
      }
    >
      <div className={'min-w-[140px] md:min-w-[700px] flex flex-col gap-20'}>
        <div
          className={'w-full min-h-[140px] flex-col-center gap-20 break-keep'}
        >
          <h2 className={'w-full text-30 md:text-40 font-bold text-start'}>
            [과제] {title}
          </h2>
          <h3 className={`w-full ${formTextStyle} font-semibold text-start`}>
            [{topic}]
          </h3>
          <p className={`w-full ${formTextStyle} text-start`}>{description}</p>
        </div>
        {studentInfoInputs.map(({ label, id }) => (
          <label key={id} className={labelStyle}>
            {label}
            <input className={inputStyle} readOnly={readOnly} />
          </label>
        ))}
        <div className={'py-30 flex flex-col gap-40'}>
          {questions.map((q, qIndex) => (
            <label
              key={q.question}
              className={`w-full flex flex-col gap-20 ${formTextStyle}`}
            >
              <h3 className={'font-semibold'}>
                {qIndex + 1}. {q.question}
              </h3>
              {q.explanation.map(ex => (
                <p key={ex} className={'indent-[20px] whitespace-pre-wrap'}>
                  {ex}
                </p>
              ))}
              <textarea
                className={`w-full min-h-[150px] p-6 ${formTextStyle}`}
                placeholder={'답안 입력하기'}
                readOnly={readOnly}
              />
            </label>
          ))}
        </div>
        <div className={`w-full flex flex-col gap-20 ${formTextStyle}`}>
          <h3 className={'font-semibold'}>[토론 및 발표]</h3>
          <p className={'indent-[20px] whitespace-pre-wrap'}>
            위에서 적은 내용을 친구들과 공유하고 토론해보자. 그리고 생각을
            가다듬고 정리해서 자신 있게 발표해보자.
          </p>
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

export default AssignmentForm;
