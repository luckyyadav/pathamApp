import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesRoutingModule } from './notices-routing.module';
import { NoticesComponent } from './notices.component';

/* Common Component import */
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NoticesComponent],
  imports: [
    CommonModule,
    NoticesRoutingModule,
    SharedCommonComponentModule
  ]
})
export class NoticesModule { }
