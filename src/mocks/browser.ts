import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';

// 브라우저의 service worker에 handler를 제공하여 등록한다.
export const worker = setupWorker(...handlers);
