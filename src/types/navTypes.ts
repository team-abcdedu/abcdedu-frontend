export interface MobileMenuNavItem {
  to: string;
  text: string;
}

export interface HeaderNavItem extends MobileMenuNavItem {
  type?: 'link' | 'dropdown';
  list?: {
    to: string;
    text: string;
  }[];
}
