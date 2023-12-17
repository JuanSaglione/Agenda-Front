import { Component, ElementRef, ViewChild } from '@angular/core';
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
  isLoading: boolean = false;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  source: string = '../../../../assets/icons/visible.png';

  constructor(private auth: AuthService, private router: Router) {}

  registerData: IRegisterRequest = {
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  };

  async register(registerForm: NgForm) {
    this.isLoading = true;
    const user = await this.auth.register(registerForm.value);
    this.isLoading = false;
    if (user) this.router.navigateByUrl('/auth/login'); //cuando nos registramos nos lleva al login
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
