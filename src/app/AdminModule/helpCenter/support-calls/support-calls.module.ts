import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportCallsComponent } from './support-calls.component';
import { SupportCallsRoutingModule } from './support-calls-routing.module';

/* Common Component import */
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SupportCallsComponent],
  imports: [
    CommonModule,
    SharedCommonComponentModule,
    SupportCallsRoutingModule,
  ],
})
export class SupportCallsModule {}
