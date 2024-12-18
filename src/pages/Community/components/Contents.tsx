import CommunityInfo from './CommunityInfo';

export default function Contents() {
  return (
    <section
      className={
        'flex flex-col items-center justify-center text-center bg-neutral-100 pt-100 pb-150'
      }
    >
      <h3
        className={
          'font-bold pb-50 grid place-items-center text-40 md:text-50 px-30 break-keep'
        }
      >
        ABCDEdu의 커뮤니티에 오신 것을 환영합니다!
      </h3>
      <div className='flex flex-row items-center justify-center w-full pb-50 gap-4 sm:gap-20 md:gap-50 lg:gap-100 xl:gap-300'>
        <div className='h-5 bg-primary-300 flex-grow'></div>
        <h5 className='text-[25px] font-medium text-gray-500'>
          전국 학생들 모여라!
        </h5>
        <div className='h-5 bg-primary-300 flex-grow'></div>
      </div>
      <p className='text-xl font-medium pb-50 px-20 break-keep'>
        함께 모여 지식을 공유하고 경험을 나눌 수 있는 ABCDEdu의 커뮤니티에 오신
        것을 환영합니다!
        <br />
        단순한 지식을 얻는 것 이상으로, 전국 학생들이 소통하고 협력할 수 있는
        특별한 공간을 제공합니다.
        <br />
        특히 앞으로 다가올 2025년 고교학점제에 대한 소식부터 다른 학교로 이동해
        수업을 들을 수 있는 정보까지,
        <br />
        ABCDEdu는 학생들이 직접 공유하는 다양한 학교의 수업 정보를 빠르게 받아볼
        수 있습니다.
      </p>

      <CommunityInfo />
    </section>
  );
}
