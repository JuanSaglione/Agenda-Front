import { Component, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contact.interface';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contactsData: ContactJsonPlaceholder[] = [];

  constructor(private contactS: ContactService) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.contactsData = await this.contactS.getContacts();
    console.log(this.contactsData);
  }
}
