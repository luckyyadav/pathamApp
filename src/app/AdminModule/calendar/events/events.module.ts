import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';

/* Common Component import */
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedCommonComponentModule
  ]
})
export class EventsModule { }
