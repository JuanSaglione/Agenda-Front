import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewContactRoutingModule } from './new-contact-routing.module';
import { NewContactComponent } from './new-contact.component';

@NgModule({
  declarations: [NewContactComponent],
  imports: [CommonModule, NewContactRoutingModule],
})
export class NewContactModule {}
