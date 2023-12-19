import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactBooksComponent } from './contact-books.component';

const routes: Routes = [
  {
    path: ':contactBookId/contacts',
    loadChildren: () =>
      import('../contacts/contacts.module').then((m) => m.ContactsModule),
  },
  {
    path: '',
    component: ContactBooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactBooksRoutingModule {}
