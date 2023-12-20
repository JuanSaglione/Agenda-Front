import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailRoutingModule } from './user-detail-routing.module';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [CommonModule, UserDetailRoutingModule, FormsModule],
})
export class UserDetailModule {}
