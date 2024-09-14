export interface ContactForm {
  userName: string;
  email: string;
  phoneNumber: string;
  title: string;
  content: string;
}

export type ContactType = 'class' | 'training' | 'etc';

export type ContactTypeLabel = {
  [K in ContactType]: string;
};

export interface Contact {
  type: ContactType;
  contactId: number;
  title: string;
  userName: string;
  phoneNumber: string;
  email: string;
  content: string;
  createdAt: string;
}

export type ContactSummary = Omit<Contact, 'phoneNumber' | 'email' | 'content'>;
