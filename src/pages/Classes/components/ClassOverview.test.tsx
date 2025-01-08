import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';

import ClassOverview from './ClassOverview';

describe('ClassOverview', () => {
  const mockClassData = {
    title: 'A',
    subTitle: '테스트 서브타이틀',
    description: '테스트 설명',
    subClasses: [
      {
        title: '서브클래스 1',
        orderNumber: 1,
        description: '설명 1',
        subClassId: 1,
      },
    ],
  };

  test('클래스 개요를 올바르게 렌더링합니다', () => {
    render(
      <MemoryRouter>
        <ClassOverview index={0} classData={mockClassData} />
      </MemoryRouter>,
    );

    expect(screen.getByText('A')).toBeDefined();
    expect(screen.getByText('Class A')).toBeDefined();
    expect(screen.getByText('테스트 서브타이틀 : 테스트 설명')).toBeDefined();
  });

  test('서브타이틀이나 설명이 없을 때도 올바르게 렌더링합니다', () => {
    const incompleteClassData = JSON.parse(JSON.stringify(mockClassData));

    incompleteClassData.subTitle = undefined;
    incompleteClassData.description = undefined;

    render(
      <MemoryRouter>
        <ClassOverview index={0} classData={incompleteClassData} />
      </MemoryRouter>,
    );

    expect(screen.getByText('A')).toBeDefined();
    expect(screen.getByText('Class A')).toBeDefined();
  });

  test('인덱스에 따라 올바른 배경색 클래스를 적용합니다', () => {
    const { container } = render(
      <MemoryRouter>
        <ClassOverview index={1} classData={mockClassData} />
      </MemoryRouter>,
    );

    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-primary-100');
  });
});
