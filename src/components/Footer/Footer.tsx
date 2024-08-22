import FooterNav from './FooterNav';
import FooterSns from './FooterSns';

function Footer() {
  return (
    <div className='text-center'>
      <p>대표: 한서현 ㅣ 주소: 서울시 관악구 관악로 17길 9</p>
      <p>연락처: 010-5961-2628</p>
      <p>이메일: abcdedu@abcdedu.com</p>
      <FooterSns />
      <FooterNav />
    </div>
  );
}

export default Footer;
