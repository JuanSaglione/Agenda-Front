import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegisterRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private auth: AuthService, private router: Router) {}

  registerData: IRegisterRequest = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  };

  async register(registerForm: NgForm) {
    console.log(registerForm.value);
    const user = await this.auth.register(registerForm.value); //ejectua addUser del auth service con los valores del form
    if (user) this.router.navigateByUrl('/auth/login'); //cuando nos registramos nos lleva al login
  }
}
