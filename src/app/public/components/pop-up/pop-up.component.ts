import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  action() {
    if (this.data.type === 'navigate') {
      this.router.navigateByUrl(this.data.route);
    }
    if (this.data.type === 'closeSession') {
      this.auth.resetSession();
      this.router.navigateByUrl(this.data.route);
    }
  }
}
