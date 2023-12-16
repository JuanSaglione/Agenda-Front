import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  isLogged() {
    return this.auth.isLoggedIn(); //si esta logueado devuelve true sino false
  }

  logOut() {
    this.router.navigateByUrl('');
    this.auth.resetSession(); // elimina el session del localstorage y setea isLoggedIn en false
  }

  ngOnInit(): void {
    //sthis.isLogg() //al iniciar o al recargar la pagina corrobora si el user esta logg
  }
}
