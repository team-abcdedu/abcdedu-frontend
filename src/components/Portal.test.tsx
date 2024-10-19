import { render, screen } from '@testing-library/react';

import Portal from './Portal';

describe('components/Portal', () => {
  it('정의되어 있어야 한다', () => {
    expect(Portal).toBeDefined();
  });

  it('children을 렌더링한다', () => {
    render(<Portal>children</Portal>);
    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('children을 document.body에 렌더링한다', () => {
    const { container } = render(<Portal>children</Portal>);
    expect(container.firstChild).not.toBeInTheDocument();
    expect(document.body).toHaveTextContent('children');
  });
});
