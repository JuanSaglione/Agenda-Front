import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contact.interface';
import { ContactService } from 'src/app/core/services/contact.service';
@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss'],
})
export class NewContactComponent implements OnInit {
  constructor(private location: Location, private contactS: ContactService) {}

  contactData: ContactJsonPlaceholder = {
    Name: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Location: '',
    ContactBookId: 0,
  };

  ngOnInit(): void {}

  goToPreviousPage() {
    this.location.back();
  }

  // async addContact(newContactForm: NgForm) {
  //   await this.contactS.addContact(newContactForm.value);
  // }
}
