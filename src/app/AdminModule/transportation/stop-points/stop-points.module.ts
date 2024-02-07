import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StopPointsComponent } from './stop-points.component';
import { StopPointsRoutingModule } from './stop-points-routing.module';

import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [ StopPointsComponent],
  imports: [
    CommonModule,
    StopPointsRoutingModule,
    SharedCommonComponentModule,
  ],
})
export class StopPointsModule {}
