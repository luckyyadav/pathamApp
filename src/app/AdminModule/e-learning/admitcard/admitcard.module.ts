import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmitcardComponent } from './admitcard.component';
import { AdmitcardRoutingModule } from './admitcard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
  declarations: [AdmitcardComponent],
  imports: [
    CommonModule,
    AdmitcardRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ]
})
export class AdmitcardModule { }
