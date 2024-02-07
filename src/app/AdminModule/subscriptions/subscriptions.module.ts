import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { CommonImportModule } from '../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../featureModule/my-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    CommonImportModule,
    MyMaterialModule,
  ]
})
export class SubscriptionsModule { }
