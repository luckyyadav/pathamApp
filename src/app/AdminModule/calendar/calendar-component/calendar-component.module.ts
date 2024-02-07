import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponentRoutingModule } from './calendar-component-routing.module';
import { CalendarComponentComponent } from './calendar-component.component';

/* Common Component import */
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [CalendarComponentComponent],
  imports: [
    CommonModule,
    CalendarComponentRoutingModule,
    SharedCommonComponentModule,
  ],
})
export class CalendarComponentModule {}
