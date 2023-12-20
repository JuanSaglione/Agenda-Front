import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { SharedContactBookJsonPlaceHolder } from 'src/app/core/interfaces/sharedContactBook.interface';
import { SharedContactBookService } from 'src/app/core/services/shared-contact-book.service';

@Component({
  selector: 'app-shared-contact-books',
  templateUrl: './shared-contact-books.component.html',
  styleUrls: ['./shared-contact-books.component.scss'],
})
export class SharedContactBooksComponent implements OnInit {
  sharedContactBooks: SharedContactBookJsonPlaceHolder[] = [];
  newSharedContactBookPlaceholder: SharedContactBookJsonPlaceHolder = {
    id: 0,
    contactBookName: '',
    description: '',
    ownerUserId: 0,
  };
  isLoading: boolean = true;
  noSharedContactBooks!: string;
  userId = this.auth.getUserId();
  //ownerUserName = this.user.getUserById(this.newSharedContactBookPlaceholder.ownerUserId)

  constructor(
    private scbService: SharedContactBookService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getSharedContactBooks();
  }

  async getSharedContactBooks() {
    if (this.userId) {
      const response = await this.scbService.getSharedContactBooks(this.userId);
      if (response.length === 0) {
        this.noSharedContactBooks = 'No tenés agendas compartidas';
      }
      this.isLoading = false;
      this.sharedContactBooks = response;
    }
  }
}







 

  

  