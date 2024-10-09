/* eslint-disable no-useless-return */
import { http } from 'msw';

export const common = [
  http.get('*', () => {
    return;
  }),
  http.post('*', () => {
    return;
  }),
];
