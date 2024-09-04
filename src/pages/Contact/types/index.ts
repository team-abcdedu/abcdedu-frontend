import { ContactType } from '@/types/contact';

export interface ContactItem {
  type: ContactType;
  label: string;
  message: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
