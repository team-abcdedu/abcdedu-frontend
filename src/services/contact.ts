import { get, post } from '@/libs/api';
import {
  Contact,
  ContactForm,
  ContactSummary,
  ContactType,
} from '@/types/contact';

class ContactApi {
  static async createContact(form: ContactForm, type: ContactType) {
    return post(`/contacts/`, { ...form, type });
  }

  static async getContactList() {
    return get<ContactSummary[]>('/contacts/');
  }

  static async getContactDetail(id: number) {
    return get<Contact>(`/contacts/${id}`);
  }
}

export default ContactApi;
