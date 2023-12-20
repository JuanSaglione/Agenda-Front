import { Injectable } from '@angular/core';
import { IRegisterRequest, iAuthRequest } from '../interfaces/auth';
import { BACKEND_URL } from '../constants/backend';
import { ISession } from '../interfaces/session.interface';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  private loggedIn: boolean = false;

  async login(authentication: iAuthRequest): Promise<boolean> {
    try {
      const res = await fetch(BACKEND_URL + '/authentication/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authentication),
      });
      if (!res.ok) return false;
      const token = await res.text();
      console.log(token);
      if (!token) return false;
      this.setSession(token);
      const tokenDecoded = jwtDecode(token);
      const userId = tokenDecoded.sub;
      console.log(tokenDecoded);
      console.log(typeof userId);
      if (userId) {
        this.setUserId(userId);
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async register(user: IRegisterRequest) {
    const response = await fetch(BACKEND_URL + '/authentication/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  }

  isLoggedIn() {
    if (this.loggedIn) {
      return this.loggedIn;
    }
    const localSession = localStorage.getItem('session');
    if (localSession) {
      const session = JSON.parse(localSession);
      if (session.expiresIn) {
        const expirationDate = new Date(session.expiresIn);
        const currentDate = new Date();
        if (currentDate > expirationDate) {
          this.resetSession();
          return false;
        }
        return true;
      }
      return false;
    }
    return false;
  }

  getSession(): ISession {
    const item: string = localStorage.getItem('session') || 'invalid';
    if (item !== 'invalid') {
      return JSON.parse(item);
    }
    return { expiresIn: '', token: '' };
  }

  setSession(token: any, expiresTimeHours: number = 2) {
    const date = new Date();
    date.setHours(date.getHours() + expiresTimeHours);

    const session: ISession = {
      expiresIn: new Date(date).toISOString(),
      token,
    };

    this.loggedIn = true;
    localStorage.setItem('session', JSON.stringify(session));
    //window.location.reload();
  }

  setUserId(userId: string) {
    localStorage.setItem('id', userId);
  }

  getUserId() {
    const id = localStorage.getItem('id');
    if (id) return parseInt(id);
    return null;
  }

  async getMe() {
    const res = await fetch('', {
      headers: {
        Authorization: this.getSession().token!,
      },
    });
    return await res.json();
  }

  resetSession() {
    localStorage.removeItem('session');
    localStorage.removeItem('id');
    this.router.navigateByUrl('');
    this.loggedIn = false;
    console.log('logged out');
  }
}
