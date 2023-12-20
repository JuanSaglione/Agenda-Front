import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedUserGuard } from './core/guards/logged-user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contactBooks',
    canActivate: [LoggedUserGuard],
    loadChildren: () =>
      import('./public/pages/contact-books/contact-books.module').then(
        (m) => m.ContactBooksModule
      ),
  },
  {
    path: 'sharedContactBooks',
    canActivate: [LoggedUserGuard],
    loadChildren: () =>
      import(
        './public/pages/shared-contact-books/shared-contact-books.module'
      ).then((m) => m.SharedContactBooksModule),
  },
  {
    path: 'userDetail',
    canActivate: [LoggedUserGuard],
    loadChildren: () =>
      import('./public/pages/user-detail/user-detail.module').then(
        (m) => m.UserDetailModule
      ),
  },
  {
    path: 'auth',
    canActivate: [LoggedUserGuard],
    loadChildren: () =>
      import('./public/pages/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
