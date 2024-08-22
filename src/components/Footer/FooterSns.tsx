import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function FooterSns() {
  return (
    <div className='flex justify-center space-x-4 mb-4'>
      <Link to='#' className='text-black hover:text-gray-500'>
        <FaInstagram />
        {/* <img src="<FaInstagram />" alt="Instagram" className="h-8 w-8" /> */}
      </Link>
      <Link to='#' className='text-black hover:text-gray-500'>
        <img
          src='/path-to-your-youtube-icon.png'
          alt='YouTube'
          className='h-8 w-8'
        />
      </Link>
      <Link to='#' className='text-black hover:text-gray-500'>
        <img src='/path-to-your-blog-icon.png' alt='Blog' className='h-8 w-8' />
      </Link>
      <Link to='#' className='text-black hover:text-gray-500'>
        <img
          src='/path-to-your-talk-icon.png'
          alt='KakaoTalk'
          className='h-8 w-8'
        />
      </Link>
    </div>
  );
}

export default FooterSns;
