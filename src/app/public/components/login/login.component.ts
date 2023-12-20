import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading: boolean = false;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  source: string = '../../../../assets/icons/visible.png';

  constructor(
    private auth: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  authData: iAuthRequest = {
    email: '',
    password: '',
  };

  async login(loginForm: NgForm) {
    this.isLoading = true;
    const token = await this.auth.login(loginForm.value); //metodo login de auth service con los datos del form
    this.isLoading = false;
    if (!token) {
      this.openPopUp(
        'Error al autenticar, intente nuevamente o cree una cuenta si no esta registrado',
        'error'
      );
    }
    if (token) this.openPopUp('Bienvenido!', 'navigate');
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
  openPopUp(msg: string, tp: string) {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '200px',
      data: {
        message: msg,
        type: tp,
        route: '',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        if (tp === 'navigate') {
          this.router.navigateByUrl('');
        }
      }
    });
  }
}
