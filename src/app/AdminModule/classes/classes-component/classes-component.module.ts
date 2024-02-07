import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponentRoutingModule } from './classes-component-routing.module';
import { ClassesComponentComponent } from './classes-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import { CommonImportModule } from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [ClassesComponentComponent],
  imports: [
    CommonModule,
    ClassesComponentRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule,
  ],
})
export class ClassesComponentModule {}
