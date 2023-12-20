import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private auth: AuthService,
    private cService: ContactService
  ) {}

  ngOnInit(): void {}

  async deleteContact(contactId: number | undefined) {
    if (contactId) {
      await this.cService.deleteContact(contactId);
    }
  }

  action() {
    if (this.data.type === 'navigate') {
      this.router.navigateByUrl(this.data.route);
    } else if (this.data.type === 'closeSession') {
      this.auth.resetSession();
      this.router.navigateByUrl(this.data.route);
    } else if (this.data.type === 'deleteContact') {
      this.deleteContact(this.data.contactId);
    } else if (this.data.type === 'deleteUser') {
      this.auth.resetSession();
    }
  }
}
