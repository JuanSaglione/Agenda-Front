import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contact.interface';
import { ContactService } from 'src/app/core/services/contact.service';
@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss'],
})
export class NewContactComponent implements OnInit {
  constructor(
    private location: Location,
    private contactS: ContactService,
    private route: ActivatedRoute
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

    await this.contactS.createContact(this.contactData);
  }

  // async addContact(newContactForm: NgForm) {
  //   await this.contactS.addContact(newContactForm.value);
  // }
}
