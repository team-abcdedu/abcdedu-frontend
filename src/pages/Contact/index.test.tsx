import { fireEvent, screen, within } from '@testing-library/react';

import customRender from '@/__test__/customRender';

import { contactItems } from './constants';

import Contact from '.';

describe('문의 페이지', () => {
  test('각 문의 유형에 대한 카드가 렌더링 되어야 한다.', () => {
    customRender(<Contact />);

    contactItems.forEach(item => {
      const label = screen.getByText(item.label);
      expect(label).toBeInTheDocument();

      const card = label.closest('div');
      expect(within(card!).getByText(item.message)).toBeInTheDocument();
      expect(within(card!).getByText('작성하기')).toBeInTheDocument();
    });
  });

  test('각 문의 유형의 작성하기 버튼을 누르면 해당 유형의 문의 작성 모달이 열려야 한다.', () => {
    customRender(<Contact />);

    // 강의 의뢰 문의 작성 클릭
    fireEvent.click(screen.getAllByText('작성하기')[0]);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText(contactItems[0].label)).toBeInTheDocument();
  });
});
