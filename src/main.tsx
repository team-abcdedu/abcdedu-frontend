import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { initSentry } from './libs/sentry';

initSentry();

// 배포 버전이 변경될 때, 이전 버전 사용자에게 발생할 수 있는 import error 처리
// https://ko.vitejs.dev/guide/build#load-error-handling
window.addEventListener('vite:preloadError', event => {
  console.error('Preload error occurred:', event.payload);
  window.location.reload();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
