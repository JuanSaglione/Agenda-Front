import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactBooksRoutingModule } from './contact-books-routing.module';
import { ContactBooksComponent } from './contact-books.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactBooksComponent],
  imports: [CommonModule, ContactBooksRoutingModule, FormsModule],
})
export class ContactBooksModule {}
