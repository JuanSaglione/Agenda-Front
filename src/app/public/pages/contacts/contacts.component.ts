import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contact.interface';
import { ContactBookJsonPlaceHolder } from 'src/app/core/interfaces/contactBook.interface';
import { ContactBookService } from 'src/app/core/services/contact-book.service';
import { ContactService } from 'src/app/core/services/contact.service';
import { SharedContactBookService } from 'src/app/core/services/shared-contact-book.service';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contactsData: ContactJsonPlaceholder[] = [];
  contactBook: ContactBookJsonPlaceHolder = {};
  contactBookId!: number;
  shContactBook: boolean = false;
  sharedEmail: any = {
    email: '',
  };

  constructor(
    private contactS: ContactService,
    private contactB: ContactBookService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private shService: SharedContactBookService
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
          this.contactBookId = parseInt(contactBookId);
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

  async shareContactBook(email: string) {
    const response = await this.shService.shareContactBook(
      this.contactBookId,
      email
    );
    console.log(response);
    if (response!) {
      this.openPopUp(response, 'sharedContactBook');
    }
  }

  openPopUp(msg: string, tp: string) {
    this.dialog.open(PopUpComponent, {
      width: '200px',
      data: {
        message: msg,
        type: tp,
      },
    });
  }
  handleShContactBook() {
    this.shContactBook = !this.shContactBook;
  }
}
