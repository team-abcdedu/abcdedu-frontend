import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import SubClassFileItem from './SubClassFileItem';

describe('SubClassFileItem', () => {
  const defaultProps = {
    label: '테스트 라벨',
    onClick: vi.fn(),
  };

  test('라벨과 아이콘을 올바르게 렌더링합니다', () => {
    render(
      <SubClassFileItem {...defaultProps}>
        <span>아이콘</span>
      </SubClassFileItem>,
    );

    expect(screen.getByText('테스트 라벨')).toBeDefined();
    expect(screen.getByText('아이콘')).toBeDefined();
  });

  test('버튼 클릭 시 onClick 핸들러가 호출됩니다', () => {
    render(
      <SubClassFileItem {...defaultProps}>
        <span>아이콘</span>
      </SubClassFileItem>,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  test('버튼에 올바른 스타일이 적용되어 있는지 확인합니다', () => {
    render(
      <SubClassFileItem {...defaultProps}>
        <span>아이콘</span>
      </SubClassFileItem>,
    );

    const button = screen.getByRole('button');
    expect(button.className).toContain('w-100');
    expect(button.className).toContain('min-h-[140px]');
    expect(button.className).toContain('flex');
  });

  test('라벨 텍스트에 올바른 스타일이 적용되어 있는지 확인합니다', () => {
    render(
      <SubClassFileItem {...defaultProps}>
        <span>아이콘</span>
      </SubClassFileItem>,
    );

    const labelContainer = screen.getByText('테스트 라벨');
    expect(labelContainer?.className).toContain('text-20');
    expect(labelContainer?.className).toContain('font-semibold');
    expect(labelContainer?.className).toContain('text-center');
  });

  test('아이콘 래퍼에 올바른 스타일이 적용되어 있는지 확인합니다', () => {
    render(
      <SubClassFileItem {...defaultProps}>
        <span>아이콘</span>
      </SubClassFileItem>,
    );

    const iconContainer = screen.getByText('아이콘').parentElement;
    expect(iconContainer?.className).toContain('w-100');
    expect(iconContainer?.className).toContain('h-100');
    expect(iconContainer?.className).toContain('flex-row-center');
  });

  test('children prop이 올바르게 렌더링되는지 확인합니다', () => {
    render(
      <SubClassFileItem {...defaultProps}>
        <div data-testid='custom-icon'>커스텀 아이콘</div>
      </SubClassFileItem>,
    );

    expect(screen.getByTestId('custom-icon')).toBeDefined();
    expect(screen.getByText('커스텀 아이콘')).toBeDefined();
  });
});
