import Head from '@/components/Head';

export default function History() {
  return (
    <div>
      <Head title='히스토리 | ABCDEdu' />
      <div className='w-full h-[600px] flex-col-center bg-primary-400'>
        <h2 className='text-center text-white leading-[1.3] font-bold'>
          <span className='block text-18 tracking-[6px] -mr-6 pb-12'>
            HISTORY OF
          </span>
          <span className='text-64 xs:text-80'>ABCDEdu</span>
        </h2>
      </div>
      <section className='px-24 py-80'>
        <div className='max-w-[700px] w-full m-auto text-18 leading-[1.4] flex flex-col gap-32'>
          <div>
            <h3>[2022]</h3>
            <br />
            <p>{`• 중고등학생을 위한 인공지능 전문 교육 <인공지능의 수학적 기초> 개발  `}</p>
            <p>
              • 서울대학교 평생교육원을 통해 서울시 중고등학교 대상으로 인공지능
              교육 서비스 시작
            </p>
          </div>
          <div>
            <h3>[2023]</h3>
            <br />
            <p>{`• 생성형 인공지능 교육 <ChatGPT의 수학적 기초> 개발 및 런칭`}</p>
            <p>{`• 노코드 기반 딥러닝 교육 <눈으로 이해하는 인공신경망> 개발 및 런칭`}</p>
            <p>• 경기도권으로 서비스 확장</p>
          </div>
          <div>
            <h3>[2024]</h3>
            <br />
            <p>{`• 코드 기반 딥러닝 교육 <파이썬으로 이해하는 인공신경망> 개발 및 런칭`}</p>
            <p>• GPT 기반 생기부 작성 서비스 개발</p>
            <p>• 웹서비스 개발 및 런칭 </p>
          </div>
        </div>
      </section>
    </div>
  );
}
