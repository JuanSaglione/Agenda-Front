import { Component, OnInit } from '@angular/core';
import { ContactBookJsonPlaceHolder } from 'src/app/core/interfaces/contactBook.interface';
import { ContactBookService } from 'src/app/core/services/contact-book.service';

@Component({
  selector: 'app-shared-contact-books',
  templateUrl: './shared-contact-books.component.html',
  styleUrls: ['./shared-contact-books.component.scss'],
})
export class SharedContactBooksComponent implements OnInit {
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
      this.noContactBooks = 'No tenés agendas compartidas';
    }
    this.isLoading = false;
    this.contactBooks = response;
  }
}
