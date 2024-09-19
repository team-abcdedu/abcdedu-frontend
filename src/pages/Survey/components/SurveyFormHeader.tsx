interface SurveyFormHeaderProps {
  title: string;
  description: string;
}

function SurveyFormHeader({ title, description }: SurveyFormHeaderProps) {
  const formTextStyle = 'text-16 md:text-20';

  return (
    <div
      className={
        'w-full min-h-[700px] md:min-h-[800px] px-30 pt-60 flex flex-col items-center gap-40 break-keep'
      }
    >
      <h1
        className={
          'w-full text-40 md:text-50 font-bold text-center text-primary-300'
        }
      >
        {title}
      </h1>
      <p
        className={`w-full md:w-4/5 p-40 flex-col-center gap-20 ${formTextStyle} text-center`}
      >
        {description.split('\n').map((line, index) => (
          <span key={`${line.slice(1)}-${index}`}>{line}</span>
        ))}
      </p>
      <fieldset
        className={
          'min-w-[400px] md:min-w-[600px] border-2 rounded border-primary-300'
        }
      >
        <legend className={`px-20 text-20 md:text-24 font-medium text-center`}>
          문의
        </legend>
        <ul className={`w-full flex-col-center ${formTextStyle}`}>
          <li>이메일 : abcdedu@abcdedu.com</li>
          <li>인스타 : abcd_education</li>
        </ul>
      </fieldset>
    </div>
  );
}

export default SurveyFormHeader;
