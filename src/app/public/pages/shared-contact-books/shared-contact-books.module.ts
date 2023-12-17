import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedContactBooksRoutingModule } from './shared-contact-books-routing.module';
import { SharedContactBooksComponent } from './shared-contact-books.component';


@NgModule({
  declarations: [
    SharedContactBooksComponent
  ],
  imports: [
    CommonModule,
    SharedContactBooksRoutingModule
  ]
})
export class SharedContactBooksModule { }
