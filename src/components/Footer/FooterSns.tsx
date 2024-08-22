import { InstagramLogo, YoutubeLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import kakaoTalk from '../../assets/kakaotalk.svg';
import naverBand from '../../assets/naver band.png';
import naverBlog from '../../assets/naver blog.png';

function FooterSns() {
  return (
    <div className='flex justify-center space-x-20 my-8'>
      <Link
        to='https://www.instagram.com/abcd_education/'
        className='text-black'
      >
        <InstagramLogo size={20} />
      </Link>

      <Link to='https://www.youtube.com/@abcd_edu' className='text-black'>
        <YoutubeLogo size={20} weight='fill' />
      </Link>

      <Link to='https://band.us/@abcdedu' className='text-black'>
        <img
          src={naverBand}
          alt='Naver Band'
          className='h-20 w-20 object-contain'
        />
      </Link>

      <Link to='https://blog.naver.com/abcdedu' className='text-black'>
        <img
          src={naverBlog}
          alt='Naver Band'
          className='h-20 w-20 object-contain'
        />
      </Link>

      <Link to='https://pf.kakao.com/_rtaxoG' className='text-black'>
        <img
          src={kakaoTalk}
          alt='Naver Band'
          className='h-20 w-20 object-contain'
        />
      </Link>
    </div>
  );
}

export default FooterSns;
