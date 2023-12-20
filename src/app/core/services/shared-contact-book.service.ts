import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { SharedContactBookJsonPlaceHolder } from '../interfaces/sharedContactBook.interface';
import { BACKEND_URL } from '../constants/backend';

@Injectable({
  providedIn: 'root',
})
export class SharedContactBookService {
  constructor(private auth: AuthService) {}

  async getSharedContactBooks(
    userId: number
  ): Promise<SharedContactBookJsonPlaceHolder[]> {
    const url = `${BACKEND_URL}/User/getAll/${userId}/sharedContactBooks`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw error;
    }
  }

  async shareContactBook(contactBookId: number, email: string) {
    const response = await fetch(
      `${BACKEND_URL}/User/shareContactBook?sharedUserEmail=${encodeURIComponent(
        email
      )}&contactBookId=${contactBookId}`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`,
        },
      }
    );

    if (response.ok) {
      let responseBody: string;
      responseBody = await response.text();
      console.log('Texto de la respuesta:', responseBody);
      return responseBody;
    } else {
      const errorText = await response.text();
      console.log('Error en la solicitud:', errorText);
      return errorText;
    }
  }
}
