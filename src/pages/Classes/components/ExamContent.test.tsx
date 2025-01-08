import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, vi, test } from 'vitest';

import ExamContent from './ExamContent';

describe('ExamContent', () => {
  const mockExamFileInfo = {
    assignmentType: '시험',
    assignmentFileId: 1,
  };

  const mockExamPaperFileInfo = {
    assignmentType: '시험지',
    assignmentFileId: 2,
  };

  vi.mock('@/hooks/class/useSubClassFileHandler', () => ({
    default: () => ({
      canAccessTheoryFile: true,
      handleclick: vi.fn(() => Promise.resolve({ status: 'success' })),
    }),
  }));

  const mockHandleButtonClick = vi.fn(() => Promise.resolve());

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('시험 문제와 답안 제출 파일이 모두 있을 때 두 버튼을 렌더링합니다', () => {
    render(
      <ExamContent
        examFileInfo={mockExamFileInfo}
        examPaperFileInfo={mockExamPaperFileInfo}
        handleButtonClick={mockHandleButtonClick}
      />,
    );

    expect(screen.getByText('문제 확인하기')).toBeDefined();
    expect(screen.getByText('답안 제출 파일 다운로드')).toBeDefined();
  });

  test('시험 문제 파일만 있을 때 문제 확인 버튼만 렌더링합니다', () => {
    render(
      <ExamContent
        examFileInfo={mockExamFileInfo}
        examPaperFileInfo={undefined}
        handleButtonClick={mockHandleButtonClick}
      />,
    );

    expect(screen.getByText('문제 확인하기')).toBeDefined();
    expect(screen.queryByText('답안 제출 파일 다운로드')).toBeNull();
  });

  test('답안 제출 파일만 있을 때 답안 제출 버튼만 렌더링합니다', () => {
    render(
      <ExamContent
        examFileInfo={undefined}
        examPaperFileInfo={mockExamPaperFileInfo}
        handleButtonClick={mockHandleButtonClick}
      />,
    );

    expect(screen.queryByText('문제 확인하기')).toBeNull();
    expect(screen.getByText('답안 제출 파일 다운로드')).toBeDefined();
  });

  test('문제 확인하기 버튼 클릭 시 handleButtonClick이 호출됩니다', async () => {
    render(
      <ExamContent
        examFileInfo={mockExamFileInfo}
        examPaperFileInfo={mockExamPaperFileInfo}
        handleButtonClick={mockHandleButtonClick}
      />,
    );

    const examButton = screen.getByText('문제 확인하기');
    await fireEvent.click(examButton);

    expect(mockHandleButtonClick).toHaveBeenCalledTimes(1);
  });

  test('답안 제출 파일 다운로드 버튼 클릭 시 handleButtonClick이 호출됩니다', async () => {
    render(
      <ExamContent
        examFileInfo={mockExamFileInfo}
        examPaperFileInfo={mockExamPaperFileInfo}
        handleButtonClick={mockHandleButtonClick}
      />,
    );

    const examPaperButton = screen.getByText('답안 제출 파일 다운로드');
    await fireEvent.click(examPaperButton);

    expect(mockHandleButtonClick).toHaveBeenCalledTimes(1);
  });

  test('파일이 모두 없을 때 아무 버튼도 렌더링하지 않습니다', () => {
    const { container } = render(
      <ExamContent
        examFileInfo={undefined}
        examPaperFileInfo={undefined}
        handleButtonClick={mockHandleButtonClick}
      />,
    );

    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });

  test('버튼에 올바른 스타일이 적용되어 있는지 확인합니다', () => {
    render(
      <ExamContent
        examFileInfo={mockExamFileInfo}
        examPaperFileInfo={mockExamPaperFileInfo}
        handleButtonClick={mockHandleButtonClick}
      />,
    );

    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button.className).toContain('border-primary-300');
      expect(button.className).toContain('rounded-lg');
      expect(button.className).toContain('hover:bg-primary-300');
    });
  });
});
