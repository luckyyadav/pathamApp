import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';

import { MatCardModule } from '@angular/material/card';
import { MyMaterialModule } from '../../../featureModule/my-material.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [LocationsComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    MatCardModule,
    MyMaterialModule,
    SharedCommonComponentModule,
  ],
})
export class LocationsModule {}
