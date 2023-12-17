import { Component, ElementRef, ViewChild } from '@angular/core';
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
  isLoading: boolean = false;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  source: string = '../../../../assets/icons/visible.png';

  constructor(private auth: AuthService, private router: Router) {}

  authData: iAuthRequest = {
    email: '',
    password: '',
  };

  async login(loginForm: NgForm) {
    this.isLoading = true;
    const token = await this.auth.login(loginForm.value); //metodo login de auth service con los datos del form
    this.isLoading = false;
    if (!token) {
      console.log('error');
    }
    if (token) this.router.navigateByUrl(''); //si recibe el token nos lleva a home
  }

  togglePasswordVisibility(): void {
    const passwordInput = this.passwordInput.nativeElement;
    passwordInput.type =
      passwordInput.type === 'password' ? 'text' : 'password';
    this.source =
      passwordInput.type === 'password'
        ? '../../../../assets/icons/visible.png'
        : '../../../../assets/icons/invisible.png';
  }
}
