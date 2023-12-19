import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  isLogged() {
    return this.auth.isLoggedIn(); //si esta logueado devuelve true sino false
  }

  logOut() {
    this.openPopUp();
  }

  ngOnInit(): void {
    //this.isLogg() //al iniciar o al recargar la pagina corrobora si el user esta logg
  }
  openPopUp() {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '200px',
      height: '130px',
      data: {
        message: '¿Seguro que querés cerrar sesión?',
        type: 'closeSession',
        route: '',
      },
    });
  }
}
