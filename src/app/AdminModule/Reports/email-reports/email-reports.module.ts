import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailReportsRoutingModule } from './email-reports-routing.module';
import { EmailReportsComponent } from './email-reports.component';



@NgModule({
  declarations: [EmailReportsComponent],
  imports: [
    CommonModule,
    EmailReportsRoutingModule
  ]
})
export class EmailReportsModule { }
