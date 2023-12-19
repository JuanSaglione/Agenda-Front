import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/components/header/header.component';
import { LoginComponent } from './public/components/login/login.component';
import { SharedContactCardComponent } from './public/components/shared-contact-card/shared-contact-card.component';
import { SharedContactsComponent } from './public/pages/shared-contacts/shared-contacts.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
