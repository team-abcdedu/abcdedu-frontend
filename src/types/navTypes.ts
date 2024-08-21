export interface HeaderMenuNavItem {
  to: string;
  text: string;
}

export interface HeaderNavItem extends HeaderMenuNavItem {
  type: 'link' | 'dropdown';
  list?: {
    to: string;
    text: string;
  }[];
}
