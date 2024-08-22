import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import naverBand from '../../assets/naver band.png';
import naverBlog from '../../assets/naver blog.png';

function FooterSns() {
  return (
    <div className='flex justify-center space-x-20 my-8'>
      <Link
        to='https://www.instagram.com/abcd_education/'
        className='text-black'
      >
        <FaInstagram className='h-20 w-20' />
      </Link>

      <Link to='https://www.youtube.com/@abcd_edu' className='text-black'>
        <FaYoutube className='h-20 w-20' />
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

      <Link to='https://blog.naver.com/abcdedu' className='text-black'>
        <RiKakaoTalkFill className='h-20 w-20' />
      </Link>
    </div>
  );
}

export default FooterSns;
