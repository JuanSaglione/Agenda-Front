import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewContactRoutingModule } from './new-contact-routing.module';
import { NewContactComponent } from './new-contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewContactComponent],
  imports: [CommonModule, NewContactRoutingModule, FormsModule],
})
export class NewContactModule {}
