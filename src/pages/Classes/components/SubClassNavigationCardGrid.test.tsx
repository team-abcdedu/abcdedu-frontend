import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';

import SubClassNavigationCardGrid from './SubClassNavigationCardGrid';

describe('SubClassNavigationCardGrid', () => {
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
      {
        title: '서브클래스 2',
        orderNumber: 2,
        description: '설명 2',
        subClassId: 2,
      },
    ],
  };

  test('서브클래스 카드들을 올바르게 렌더링합니다', () => {
    render(
      <MemoryRouter>
        <SubClassNavigationCardGrid
          bgColor='neutral'
          classData={mockClassData}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('A-1')).toBeDefined();
    expect(screen.getByText('서브클래스 1')).toBeDefined();
    expect(screen.getByText('A-2')).toBeDefined();
    expect(screen.getByText('서브클래스 2')).toBeDefined();
    expect(screen.getAllByText('바로가기')).toHaveLength(2);
  });

  test('subClasses가 없을 때 아무것도 렌더링하지 않습니다', () => {
    const emptyClassData = JSON.parse(JSON.stringify(mockClassData));

    emptyClassData.subClasses = undefined;

    const { container } = render(
      <MemoryRouter>
        <SubClassNavigationCardGrid
          bgColor='neutral'
          classData={emptyClassData}
        />
      </MemoryRouter>,
    );

    expect(container.firstChild).toBeNull();
  });

  test('배경색이 white일 때 올바른 클래스를 적용합니다', () => {
    render(
      <MemoryRouter>
        <SubClassNavigationCardGrid bgColor='white' classData={mockClassData} />
      </MemoryRouter>,
    );

    const cards = screen.getAllByRole('heading', { level: 5 });
    const cardContainer = cards[0].parentElement;
    expect(cardContainer?.className).toContain('bg-white');
  });
});
