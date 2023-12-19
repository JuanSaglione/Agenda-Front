import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedContactsRoutingModule } from './shared-contacts-routing.module';
import { SharedContactsComponent } from './shared-contacts.component';
import { SharedContactCardComponent } from '../../components/shared-contact-card/shared-contact-card.component';



@NgModule({
  declarations: [SharedContactsComponent, SharedContactCardComponent],
  imports: [CommonModule, SharedContactsRoutingModule],
})
export class SharedContactsModule {}
