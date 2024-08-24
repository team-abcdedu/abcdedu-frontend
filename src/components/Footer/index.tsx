import FooterSns from './FooterSns';

function Footer() {
  return (
    <div className='text-center text-gray-600 py-90'>
      <FooterSns />
      <p className='pb-9 text-sm'>대표: 한서현</p>
      <p className='pb-9 text-sm'>주소: 서울시 관악구 관악로 17길 9</p>
      <p className='pb-9 text-sm'>연락처: 010-5961-2628</p>
      <p className='pb-65 text-sm'>이메일: abcdedu@abcdedu.com</p>
      <hr className='h-1 border-gray-300' />

      <p className='pt-65 text-xs'>© 2022 ABCDEdu | All Rights Reserved</p>
    </div>
  );
}

export default Footer;
