import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  authData: iAuthRequest = {
    email: '',
    password: '',
  };

  async login(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = await this.auth.login(loginForm.value); //metodo login de auth service con los datos del form
    if (token) this.router.navigateByUrl(''); //si recibe el token nos lleva a home
  }
}
