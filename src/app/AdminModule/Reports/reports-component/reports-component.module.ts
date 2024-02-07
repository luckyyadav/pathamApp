import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponentRoutingModule } from './reports-component-routing.module';
import { ReportsComponentComponent } from './reports-component.component';



@NgModule({
  declarations: [ReportsComponentComponent],
  imports: [
    CommonModule,
    ReportsComponentRoutingModule
  ]
})
export class ReportsComponentModule { }
