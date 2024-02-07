import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';
import { FormComponent } from '../form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonImportModule } from '../../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../../featureModule/my-material.module';

@NgModule({
  declarations: [ItemsComponent, FormComponent],
  imports: [
    CommonModule,
    CommonImportModule,
    MyMaterialModule,
    ItemsRoutingModule,
    SharedCommonComponentModule,
    ReactiveFormsModule,
  ],
})
export class ItemsModule {}
