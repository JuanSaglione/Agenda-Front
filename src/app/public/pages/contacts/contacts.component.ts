import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contact.interface';
import { ContactBookJsonPlaceHolder } from 'src/app/core/interfaces/contactBook.interface';
import { ContactBookService } from 'src/app/core/services/contact-book.service';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contactsData: ContactJsonPlaceholder[] = [];
  contactBook: ContactBookJsonPlaceHolder = {};

  constructor(
    private contactS: ContactService,
    private contactB: ContactBookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.route.paramMap.subscribe(async (params) => {
      const contactBookId = params.get('contactBookId');
      console.log(contactBookId);

      if (contactBookId) {
        try {
          this.contactBook = await this.contactB.getContactBookById(
            parseInt(contactBookId)
          );
          this.contactsData = await this.contactS.getContacts(
            parseInt(contactBookId, 10)
          );
          console.log(this.contactsData);
        } catch (error) {
          console.error('Error al obtener datos:', error);
        }
      }
    });
  }
}
