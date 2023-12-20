import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contact.interface';
import { ContactService } from 'src/app/core/services/contact.service';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss'],
})
export class NewContactComponent implements OnInit {
  constructor(
    private location: Location,
    private contactS: ContactService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  contactData: ContactJsonPlaceholder = {
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '',
    contactBookId: 0,
  };
  contactBookId!: number;

  ngOnInit(): void {
    this.getContactBookId();
  }

  goToPreviousPage() {
    this.location.back();
  }

  async getContactBookId() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('contactBookId');
      if (id) {
        this.contactBookId = parseInt(id);
        this.contactData.contactBookId = this.contactBookId;
      }
    });
  }
  async createContact(newContactForm: NgForm) {
    console.log(newContactForm.value);

    const response = await this.contactS.createContact(this.contactData);
    if (response) {
      this.openPopUp('Contacto creado correctamente');
      newContactForm.resetForm();
      this.contactData = {
        name: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        location: '',
        contactBookId: 0,
      };
    }
  }

  openPopUp(msg: string) {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '200px',
      height: '130px',
      data: {
        message: msg,
        type: 'ok',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.goToPreviousPage();
    });
  }

  // async addContact(newContactForm: NgForm) {
  //   await this.contactS.addContact(newContactForm.value);
  // }
}
