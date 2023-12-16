import { Component, OnInit } from '@angular/core';
import {
  ContactJsonPlaceholder,
  FakeContactJsonPlaceholder,
} from 'src/app/core/interfaces/contact.interface';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contactsData: FakeContactJsonPlaceholder[] = [];

  constructor(private contactS: ContactService) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.contactsData = await this.contactS.getFakeData();
    console.log(this.contactsData);
  }
}
