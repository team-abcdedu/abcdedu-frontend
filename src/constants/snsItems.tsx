import { InstagramLogo, YoutubeLogo } from '@phosphor-icons/react';
// import { Link } from 'react-router-dom';

import kakaoTalk from '@/assets/kakaotalk.svg';
import naverBand from '@/assets/naver band.png';
import naverBlog from '@/assets/naver blog.jpg';

export const snsItems = [
  {
    to: 'https://www.instagram.com/abcd_education/',
    icon: <InstagramLogo size={44} weight='fill' />,
  },
  {
    to: 'https://www.youtube.com/@abcd_edu',
    icon: <YoutubeLogo size={44} weight='fill' />,
  },
  {
    to: 'https://blog.naver.com/abcdedu',
    icon: (
      <img
        src={naverBlog}
        alt='Naver Blog'
        className='h-44 w-44 object-contain'
      />
    ),
  },
  {
    to: 'https://band.us/@abcdedu',
    icon: (
      <img
        src={naverBand}
        alt='Naver Band'
        className='h-44 w-44 object-contain'
      />
    ),
  },
  {
    to: 'https://pf.kakao.com/_rtaxoG',
    icon: (
      <img
        src={kakaoTalk}
        alt='KakaoTalk'
        className='h-44 w-44 object-contain'
      />
    ),
  },
];
