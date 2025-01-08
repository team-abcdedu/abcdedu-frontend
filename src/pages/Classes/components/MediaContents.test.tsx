import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { mediaList } from '../constants';

function mockStore(role: string) {
  vi.doMock('@/stores', () => ({
    default: () => ({ role }),
  }));
}

describe('MediaContents 컴포넌트', () => {
  beforeEach(() => {
    vi.resetModules();
    window.scrollTo = vi.fn();
  });

  test('비로그인 사용자에게도 제목과 모든 미디어 버튼이 렌더링되어야 합니다', async () => {
    mockStore('none');
    const { default: MediaContents } = await import('./MediaContents');
    render(<MediaContents />);

    expect(screen.getByText('영상 콘텐츠')).toBeInTheDocument();
    mediaList.forEach(media => {
      expect(screen.getByText(media.title)).toBeInTheDocument();
    });
  });

  test('비로그인 사용자가 미디어 버튼 클릭시 에러 모달이 표시되어야 합니다', async () => {
    mockStore('none');
    const { default: MediaContents } = await import('./MediaContents');
    render(<MediaContents />);

    const firstMediaButton = screen.getByText(mediaList[0].title);
    fireEvent.click(firstMediaButton);

    expect(screen.getByText('관리자만 접근 가능합니다.')).toBeInTheDocument();
  });

  test('새싹 사용자가 미디어 버튼 클릭시 에러 모달이 표시되어야 합니다', async () => {
    mockStore('새싹');
    const { default: MediaContents } = await import('./MediaContents');
    render(<MediaContents />);

    const firstMediaButton = screen.getByText(mediaList[0].title);
    fireEvent.click(firstMediaButton);

    expect(screen.getByText('관리자만 접근 가능합니다.')).toBeInTheDocument();
  });

  test('학생 사용자가 미디어 버튼 클릭시 에러 모달이 표시되어야 합니다', async () => {
    mockStore('학생');
    const { default: MediaContents } = await import('./MediaContents');
    render(<MediaContents />);

    const firstMediaButton = screen.getByText(mediaList[0].title);
    fireEvent.click(firstMediaButton);

    expect(screen.getByText('관리자만 접근 가능합니다.')).toBeInTheDocument();
  });

  test('관리자 사용자가 미디어 버튼 클릭시 새 창이 열려야 합니다', async () => {
    mockStore('관리자');
    const { default: MediaContents } = await import('./MediaContents');
    const windowSpy = vi.spyOn(window, 'open');
    windowSpy.mockImplementation(() => null);

    render(<MediaContents />);

    const firstMediaButton = screen.getByText(mediaList[0].title);
    fireEvent.click(firstMediaButton);

    expect(windowSpy).toHaveBeenCalledWith(
      mediaList[0].url,
      '_blank',
      'noopener,noreferrer',
    );

    windowSpy.mockRestore();
  });
});
