import { get, post } from '@/libs/api';
import { PaginatedResponse } from '@/types';
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

  static async getContactList(page: number) {
    return get<PaginatedResponse<ContactSummary>>('/admin/contacts', {
      params: { page },
    });
  }

  static async getContactDetail(id: number) {
    return get<Contact>(`/admin/contacts/${id}`);
  }
}

export default ContactApi;
