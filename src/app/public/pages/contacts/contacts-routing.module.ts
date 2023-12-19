import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  {
    path: 'new',
    loadChildren: () =>
      import('../new-contact/new-contact.module').then(
        (m) => m.NewContactModule
      ),
  },
  {
    path: ':contactId',
    loadChildren: () =>
      import('../contact-details/contact-details.module').then(
        (m) => m.ContactDetailsModule
      ),
  },
  {
    path: '',
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
