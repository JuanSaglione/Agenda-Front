import { Injectable } from '@angular/core';
import {
  ContactJsonPlaceholder,
  FakeContactJsonPlaceholder,
} from '../interfaces/contact.interface';
import { AuthService } from './auth.service';
import { BACKEND_URL } from '../constants/backend';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private auth: AuthService) {}

  async getContacts(contactBookId: number): Promise<ContactJsonPlaceholder[]> {
    const response = await fetch(
      BACKEND_URL + '/Contact/getAllContactsFromContactBook/' + contactBookId,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`, ////******************* */
        },
      }
    );
    if (!response.ok) {
      throw new Error('Error fetching contacts');
    }
    const contacts: ContactJsonPlaceholder[] = await response.json();
    console.log(contacts);
    return contacts;
  }

  async getContactDetails(id: number): Promise<ContactJsonPlaceholder> {
    const response = await fetch(
      BACKEND_URL + '/contact/getContactById/' + id,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`, ////******************* */
        },
      }
    );
    if (!response.ok) {
      throw new Error(
        'Error fetching contact details for contactBookId: ' + id
      );
    }
    const contactDetails: ContactJsonPlaceholder = await response.json();
    console.log(contactDetails);
    return contactDetails;
  }

  async createContact(contact: ContactJsonPlaceholder) {
    console.log(contact);
    const response = await fetch(BACKEND_URL + '/Contact/createContact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
      body: JSON.stringify(contact),
    });
    return await response.json();
  }

  async updateContact(contact: ContactJsonPlaceholder) {
    console.log(contact);
    const response = await fetch(
      BACKEND_URL + '/Contact/updateContact/' + contact.id,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`,
        },
        body: JSON.stringify(contact),
      }
    );
    return await response.json();
  }

  // async getFakeData(): Promise<FakeContactJsonPlaceholder[]> {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const fakeContacts: FakeContactJsonPlaceholder[] = await response.json();
  //   console.log(fakeContacts);
  //   return fakeContacts;
  // }
  // async getFakeContact(id: number): Promise<FakeContactJsonPlaceholder> {
  //   const response = await fetch(
  //     'https://jsonplaceholder.typicode.com/users/' + id
  //   );
  //   return await response.json();
  // }
}
