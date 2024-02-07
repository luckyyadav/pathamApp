import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileSMSRoutingModule } from './mobile-sms-routing.module';
import { MobileSMSComponent } from './mobile-sms.component';



@NgModule({
  declarations: [MobileSMSComponent],
  imports: [
    CommonModule,
    MobileSMSRoutingModule
  ]
})
export class MobileSMSModule { }
