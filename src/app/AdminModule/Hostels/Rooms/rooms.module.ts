import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [RoomsComponent],
  imports: [
    CommonModule, 
    RoomsRoutingModule,
    SharedCommonComponentModule
  ],
})
export class RoomsModule {}
