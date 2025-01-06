import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Hero from './Hero';

describe('Hero 컴포넌트', () => {
  test('기본 텍스트와 버튼이 렌더링되어야 합니다', () => {
    render(<Hero />);

    expect(screen.getByText('ABCD CLASSES')).toBeInTheDocument();
    expect(
      screen.getByText(
        'AI & Data 사회에서 진로를 준비하기 위한 ABCDEdu만의 특별한 수업!',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('커리큘럼 보기')).toBeInTheDocument();
  });

  test('커리큘럼 버튼 클릭시 커리큘럼 이미지가 표시되어야 합니다', () => {
    render(<Hero />);

    const curriculumButton = screen.getByText('커리큘럼 보기');
    expect(screen.queryByAltText('Curriculum')).not.toBeInTheDocument();

    fireEvent.click(curriculumButton);
    expect(screen.getByAltText('Curriculum')).toBeInTheDocument();

    fireEvent.click(curriculumButton);
    expect(screen.queryByAltText('Curriculum')).not.toBeInTheDocument();
  });
});
