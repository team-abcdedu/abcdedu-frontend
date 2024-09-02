export interface ContactItem {
  type: string;
  label: string;
  message: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
