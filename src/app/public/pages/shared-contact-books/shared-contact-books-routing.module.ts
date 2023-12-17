import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedContactBooksComponent } from './shared-contact-books.component';

const routes: Routes = [
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
