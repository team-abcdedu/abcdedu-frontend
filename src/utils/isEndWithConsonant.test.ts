import { isEndWithConsonant } from './isEndWithConsonant';

describe('isEndWithConsonant', () => {
  it('"맛집"의 마지막 글자는 받침이 있으므로 true를 반환해야 한다.', () => {
    expect(isEndWithConsonant('맛집')).toBe(true);
  });

  it('"테스트"의 마지막 글자는 받침이 없으므로 false를 반환해야 한다.', () => {
    expect(isEndWithConsonant('테스트')).toBe(false);
  });

  it('"값"의 마지막 글자는 받침이 있으므로 true를 반환해야 한다.', () => {
    expect(isEndWithConsonant('값')).toBe(true);
  });
});
