import { InstagramLogo, YoutubeLogo } from '@phosphor-icons/react';
// import { Link } from 'react-router-dom';

import kakaoTalk from '@/assets/images/kakaotalk.svg';
import naverBand from '@/assets/images/naver band.png';
import naverBlog from '@/assets/images/naver blog.png';

export const snsItems = [
  {
    to: 'https://www.instagram.com/abcd_education/',
    icon: <InstagramLogo size={20} />,
  },
  {
    to: 'https://www.youtube.com/@abcd_edu',
    icon: <YoutubeLogo size={20} weight='fill' />,
  },
  {
    to: 'https://band.us/@abcdedu',
    icon: (
      <img
        src={naverBand}
        alt='Naver Band'
        className='h-20 w-20 object-contain'
      />
    ),
  },
  {
    to: 'https://blog.naver.com/abcdedu',
    icon: (
      <img
        src={naverBlog}
        alt='Naver Blog'
        className='h-20 w-20 object-contain'
      />
    ),
  },
  {
    to: 'https://pf.kakao.com/_rtaxoG',
    icon: (
      <img
        src={kakaoTalk}
        alt='KakaoTalk'
        className='h-20 w-20 object-contain'
      />
    ),
  },
];
