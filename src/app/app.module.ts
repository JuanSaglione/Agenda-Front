import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopUpComponent } from './public/components/pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PopUpComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}