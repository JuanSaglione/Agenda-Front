import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactBooksRoutingModule } from './contact-books-routing.module';
import { ContactBooksComponent } from './contact-books.component';


@NgModule({
  declarations: [
    ContactBooksComponent
  ],
  imports: [
    CommonModule,
    ContactBooksRoutingModule
  ]
})
export class ContactBooksModule { }
