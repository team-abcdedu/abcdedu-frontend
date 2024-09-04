export interface ContactForm {
  userName: string;
  email: string;
  phoneNumber: string;
  title: string;
  content: string;
}

export type ContactType = 'class' | 'training' | 'etc';
