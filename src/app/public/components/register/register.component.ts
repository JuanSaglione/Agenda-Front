import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IRegisterRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isLoading: boolean = false;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  source: string = '../../../../assets/icons/visible.png';

  constructor(
    private auth: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) {}

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
    if (user) this.openPopUp(); //cuando nos registramos abre el pop up que te lleva al login
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

  openPopUp() {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '200px',
      data: {
        message: 'Registro exitoso, ahora ingrese con sus datos',
        type: 'navigate',
        route: '/auth/login',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        this.router.navigateByUrl('/auth/login');
      }
    });
  }
}
