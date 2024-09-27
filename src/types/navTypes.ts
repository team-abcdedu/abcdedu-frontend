export interface NavItem {
  to: string;
  text: string;
  type?: 'link' | 'dropdown';
  list?: {
    to: string;
    text: string;
  }[];
}
