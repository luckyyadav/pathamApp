import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatCardModule } from '@angular/material/card';
// import { MatSortModule } from '@angular/material/sort';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';

import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';
// import { MyMaterialModule } from '../../../../app/featureModule/my-material.module';

@NgModule({
  declarations: [VehiclesComponent],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    // MatCardModule,
    // MyMaterialModule,
    SharedCommonComponentModule,
    // MatSortModule,
  ],
})
export class VehiclesModule {}
