import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contact.interface';
import { ContactBookJsonPlaceHolder } from 'src/app/core/interfaces/contactBook.interface';
import { ContactBookService } from 'src/app/core/services/contact-book.service';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-shared-contacts',
  templateUrl: './shared-contacts.component.html',
  styleUrls: ['./shared-contacts.component.scss'],
})
export class SharedContactsComponent implements OnInit {
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
      const sharedContactBookId = params.get('SharedContactBookId');
      console.log(sharedContactBookId);

      if (sharedContactBookId) {
        try {
          this.contactBook = await this.contactB.getContactBookById(
            parseInt(sharedContactBookId)
          );
          this.contactsData = await this.contactS.getContacts(
            parseInt(sharedContactBookId, 10)
          );
          console.log(this.contactBook);
          console.log(this.contactsData);
        } catch (error) {
          console.error('Error al obtener datos:', error);
        }
      }
    });
  }
}
