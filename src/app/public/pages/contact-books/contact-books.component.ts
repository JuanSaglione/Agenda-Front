import { Component, OnInit } from '@angular/core';
import { ContactBookJsonPlaceHolder } from 'src/app/core/interfaces/contactBook.interface';
import { ContactBookService } from 'src/app/core/services/contact-book.service';

@Component({
  selector: 'app-contact-books',
  templateUrl: './contact-books.component.html',
  styleUrls: ['./contact-books.component.scss'],
})
export class ContactBooksComponent implements OnInit {
  contactBooks: ContactBookJsonPlaceHolder[] = [];
  isLoading: boolean = true;
  noContactBooks!: string;

  constructor(private cBService: ContactBookService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getContactBooks();
  }

  async getContactBooks() {
    const response = await this.cBService.getContactBooksOfUser();
    if (response.length === 0) {
      this.noContactBooks = 'No tenés agendas';
    }
    this.isLoading = false;
    this.contactBooks = response;
  }
}
