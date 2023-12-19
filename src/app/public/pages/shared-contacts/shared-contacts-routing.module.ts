import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedContactsComponent } from './shared-contacts.component';

const routes: Routes = [
  // {
  //   path: ':sharedContactId',
  //   loadChildren: () =>
  //     import('../shared-contact-details/shared-contact-details.module').then(
  //       (m) => m.SharedContactDetailsModule
  //     ),
  // },
  {
    path: '',
    component: SharedContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedContactsRoutingModule {}
