import SurveyForm from './components/SurveyForm';

function Survey() {
  const textStyle = 'text-16 md:text-20';

  return (
    <>
      <div
        className={
          'w-full min-h-[900px] px-30 flex-col-center gap-40 break-keep'
        }
      >
        <h1
          className={
            'w-full text-50 md:text-70 font-bold text-center text-primary-300'
          }
        >
          수업 만족도 조사
        </h1>
        <p className={`w-full md:w-4/5 p-40 ${textStyle} text-center`}>
          안녕하세요. &quot;중고등학생을 위한 데이터 사이언스&quot; 교육
          서비스를 제공하는 ABCDEdu입니다.
          <br />
          수업을 수강해주신 학생 분들께 진심으로 감사하다는 말씀 드립니다.
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
        <fieldset
          className={
            'min-w-[400px] md:min-w-[600px] border-2 rounded border-primary-300'
          }
        >
          <legend className={`text-20 md:text-24 font-medium text-center`}>
            문의
          </legend>
          <ul className={`w-full flex-col-center ${textStyle}`}>
            <li>이메일 : abcdedu@abcdedu.com</li>
            <li>인스타 : abcd_education</li>
          </ul>
        </fieldset>
      </div>
      <SurveyForm />
    </>
  );
}

export default Survey;
