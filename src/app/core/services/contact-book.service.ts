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

  async getContactBooksOfUser(
    userId: number
  ): Promise<ContactBookJsonPlaceHolder[]> {
    const response = await fetch(
      BACKEND_URL + '/ContactBook/getByUserId/' + userId,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`,
        },
      }
    );
    const contactBooks: ContactBookJsonPlaceHolder[] = await response.json();
    return contactBooks;
  }

  async getContactBookById(contactBookId: number) {
    const response = await fetch(
      BACKEND_URL + '/ContactBook/getById/' + contactBookId,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`,
        },
      }
    );
    return response.json();
  }

  async createContactBook(contactBook: ContactBookJsonPlaceHolder) {
    console.log(contactBook);
    const response = await fetch(BACKEND_URL + '/ContactBook/create', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
      body: JSON.stringify(contactBook),
    });
    return await response.json();
  }

  // para sharedContactBooks
  async addContactBookToUser(contactBookId: number) {
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
