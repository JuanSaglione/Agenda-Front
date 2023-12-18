import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ContactBookJsonPlaceHolder } from '../interfaces/contactBook.interface';
import { BACKEND_URL } from '../constants/backend';

@Injectable({
  providedIn: 'root',
})
export class ContactBookService {
  constructor(private auth: AuthService) {}

  async getContactBooks(): Promise<ContactBookJsonPlaceHolder[]> {
    const response = await fetch(BACKEND_URL + '/contactBook', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return await response.json();
  }

  async getContactBooksOfUser(): Promise<ContactBookJsonPlaceHolder[]> {
    const response = await fetch(BACKEND_URL + '/ContactBook/getByUserId', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    const contactBooks: ContactBookJsonPlaceHolder[] = await response.json();
    return contactBooks;
  }

  async createContactBook(contactBook: ContactBookJsonPlaceHolder) {
    const response = await fetch(BACKEND_URL + '/contactBook', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
      body: JSON.stringify(contactBook),
    });
    return await response.json();
  }

  async addContactBookToUser(contactBookId: number) {
    // para shared
    const response = await fetch(
      BACKEND_URL + '/contactBook/' + contactBookId,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`,
        },
      }
    );
    return await response.json();
  }
}
