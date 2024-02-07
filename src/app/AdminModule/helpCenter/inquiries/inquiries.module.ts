import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiriesRoutingModule } from './inquiries-routing.module';
import { InquiriesComponent } from './inquiries.component';

/* Common Component import */
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InquiriesComponent],
  imports: [CommonModule, InquiriesRoutingModule, SharedCommonComponentModule],
})
export class InquiriesModule {}
