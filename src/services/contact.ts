import { post } from '@/libs/api';
import { ContactForm, ContactType } from '@/types/contact';

class ContactApi {
  static async createContact(form: ContactForm, type: ContactType) {
    return post(`/contacts/${type}`, form);
  }
}

export default ContactApi;
