import { Injectable } from '@angular/core';
import { ContactJsonPlaceholder } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  async getContacts(): Promise<ContactJsonPlaceholder[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Error fetching contacts');
    }
    const contacts: ContactJsonPlaceholder[] = await response.json();
    console.log(contacts);
    return contacts;
  }

  async getContactDetails(id: number): Promise<ContactJsonPlaceholder> {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
    if (!response.ok) {
      throw new Error('Error fetching contact details for Id' + id);
    }
    const contactDetails: ContactJsonPlaceholder = await response.json();
    console.log(contactDetails);
    return contactDetails;
  }
}
