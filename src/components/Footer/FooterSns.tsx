import { Link } from 'react-router-dom';

import { snsItems } from '@/constants/snsItems';

function FooterSns() {
  return (
    <div className='flex justify-center space-x-16 mb-55'>
      {snsItems.map(item => (
        <Link key={item.to} to={item.to} className='text-black'>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default FooterSns;
