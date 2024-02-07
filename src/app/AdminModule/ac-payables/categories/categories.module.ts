import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';

/* Common Component import */
import { CommonImportModule } from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedCommonComponentModule,
    CommonImportModule,
  ],
})
export class CategoriesModule {}
