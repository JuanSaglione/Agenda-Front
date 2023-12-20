import { Injectable } from '@angular/core';
import { UserJsonPlaceHolder } from '../interfaces/user.interface';
import { AuthService } from './auth.service';
import { BACKEND_URL } from '../constants/backend';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: AuthService) {}

  async getUsers(): Promise<UserJsonPlaceHolder[]> {
    const response = await fetch(
      BACKEND_URL + '/User/getAll',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`, 
        },
      }
    );
    if (!response.ok) {
      throw new Error('Error fetching users');
    }
    const users: UserJsonPlaceHolder[] = await response.json();
    console.log(users);
    return users;
  }

  async getUserDetails(id: number): Promise<UserJsonPlaceHolder> {
    const response = await fetch(
      BACKEND_URL + '/User/getById/' + id,
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
        'Error fetching user details for userId: ' + id
      );
    }
    const userDetails: UserJsonPlaceHolder = await response.json();
    console.log(userDetails);
    return userDetails;
  }

  async updateUser(user: UserJsonPlaceHolder) {
    console.log(user);
    const response = await fetch(
      BACKEND_URL + '/User/update/' + user.id,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`,
        },
        body: JSON.stringify(user),
      }
    );
    return await response.json();
  }

  async deleteUser(id: number) {
    console.log(id);
    const response = await fetch(
      BACKEND_URL + '/User/delete/' + id,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${this.auth.getSession().token!}`,
        },
        body: JSON.stringify(id),
      }
    );
    return await response.json();
  }
}

