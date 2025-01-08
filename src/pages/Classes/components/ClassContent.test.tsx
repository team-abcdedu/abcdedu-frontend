import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import ClassContent from './ClassContent';

describe('ClassContent', () => {
  const mockClassData = {
    title: 'A',
    subTitle: '테스트 서브타이틀',
    description: '테스트 설명',
    subClasses: [],
  };

  const mockSubClassData = {
    title: '서브클래스 테스트 타이틀',
    orderNumber: 1,
    description: '서브클래스 테스트 설명',
    subClassId: 1,
  };

  test('메인 클래스 페이지 내용을 올바르게 렌더링합니다', () => {
    render(
      <ClassContent
        classData={mockClassData}
        subClassData={undefined}
        isSubClassPage={false}
      />,
    );

    expect(screen.getByText('Class A')).toBeDefined();
    expect(screen.getByText('테스트 서브타이틀')).toBeDefined();
    expect(screen.getByText('테스트 설명')).toBeDefined();
  });

  test('서브클래스 페이지 내용을 올바르게 렌더링합니다', () => {
    render(
      <ClassContent
        classData={mockClassData}
        subClassData={mockSubClassData}
        isSubClassPage={true}
      />,
    );

    expect(screen.getByText('Class A-1')).toBeDefined();
    expect(screen.getByText('서브클래스 테스트 타이틀')).toBeDefined();
    expect(screen.getByText('서브클래스 테스트 설명')).toBeDefined();
  });
});
