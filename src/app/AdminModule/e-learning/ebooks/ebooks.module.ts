import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EbooksComponent } from './ebooks.component';
import { EbooksRoutingModule } from './ebooks-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [EbooksComponent],
  imports: [
    CommonModule,
    EbooksRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ]
})
export class EbooksModule { }
