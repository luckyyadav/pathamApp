import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeGroupsRoutingModule } from './fee-groups-routing.module';
import { FeeGroupsComponent } from './fee-groups.component';



@NgModule({
  declarations: [FeeGroupsComponent],
  imports: [
    CommonModule,
    FeeGroupsRoutingModule
  ]
})
export class FeeGroupsModule { }
