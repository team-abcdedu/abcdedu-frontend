import { ClipLoader } from 'react-spinners';

import Portal from './Portal';

export default function Loader() {
  return (
    <Portal>
      <div
        id='loader'
        className='w-vw h-vh w-dvw h-dvh flex-row-center fixed inset-0 z-loader pointer-events-none'
      >
        <ClipLoader size={60} color='rgba(0, 0, 128, 0.1)' />
      </div>
    </Portal>
  );
}
