import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedContactBooksComponent } from './shared-contact-books.component';

const routes: Routes = [
  {
    path: ':SharedContactBookId/sharedContacts',
    loadChildren: () =>
      import('../shared-contacts/shared-contacts.module').then((m) => m.SharedContactsModule),
  },
  {
    path: '',
    component: SharedContactBooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedContactBooksRoutingModule {}
