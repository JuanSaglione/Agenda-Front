import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactBookJsonPlaceHolder } from 'src/app/core/interfaces/contactBook.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContactBookService } from 'src/app/core/services/contact-book.service';

@Component({
  selector: 'app-contact-books',
  templateUrl: './contact-books.component.html',
  styleUrls: ['./contact-books.component.scss'],
})
export class ContactBooksComponent implements OnInit {
  contactBooks: ContactBookJsonPlaceHolder[] = [];
  newContactBookPlaceholder: ContactBookJsonPlaceHolder = {
    contactBookName: '',
    description: '',
  };
  isLoading: boolean = true;
  noContactBooks!: string;
  newContactBook: boolean = false;
  userId = this.auth.getUserId();

  constructor(
    private cBService: ContactBookService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getContactBooks();
  }

  async getContactBooks() {
    if (this.userId) {
      const response = await this.cBService.getContactBooksOfUser(this.userId);
      if (response.length === 0) {
        this.noContactBooks = 'No tenés agendas';
      }
      this.isLoading = false;
      this.contactBooks = response;
    }
  }

  addContactBook() {
    this.newContactBook = !this.newContactBook;
  }

  async createContactBook(newContactBookform: NgForm) {
    console.log(newContactBookform.value);
    const response = await this.cBService.createContactBook(
      newContactBookform.value
    );
    if (response) {
      this.getContactBooks();
      this.newContactBook = !this.newContactBook;
    }
  }
}
