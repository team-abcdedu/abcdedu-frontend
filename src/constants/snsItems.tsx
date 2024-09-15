import { InstagramLogo, YoutubeLogo } from '@phosphor-icons/react';

import kakaoTalk from '@/assets/icons/kakaotalk.svg';
import naverBand from '@/assets/icons/naver band.png';
import naverBlog from '@/assets/icons/naver blog.jpg';

export const snsItems = [
  {
    label: 'Instagram',
    to: 'https://www.instagram.com/abcd_education/',
    icon: <InstagramLogo size={44} weight='fill' />,
  },
  {
    label: 'Youtube',
    to: 'https://www.youtube.com/@abcd_edu',
    icon: <YoutubeLogo size={44} weight='fill' />,
  },
  {
    label: 'Naver Blog',
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
    label: 'Naver Band',
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
    label: 'KakaoTalk',
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
