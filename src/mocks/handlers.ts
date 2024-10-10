import { delay, http, HttpResponse } from 'msw';

import { common } from './common';

export const handlers = [
  ...common,
  // 개발 환경 테스트용
  http.get(`http://localhost:3000/api/v1/posts/31/comments`, () => {
    return HttpResponse.json(
      {
        error: 'Internal Server Error',
        message: 'An unexpected error occurred on the server.',
      },
      { status: 500 },
    );
  }),
  http.get(`http://localhost:3000/api/v1/boards/2/posts`, () => {
    return HttpResponse.json(null, { status: 500 });
  }),
  // http.post(`http://localhost:3000/api/v1/auth/login`, () => {
  //   return HttpResponse.json(null, { status: 500 });
  // }),
  // timemout test
  http.get(`http://localhost:3000/api/v1/boards/1/posts`, async () => {
    await delay('infinite');
    return new Response();
  }),
];
