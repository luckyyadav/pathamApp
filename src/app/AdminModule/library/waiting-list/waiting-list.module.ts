import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitingListRoutingModule } from './waiting-list-routing.module';
import { WaitingListComponent } from './waiting-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [WaitingListComponent],
  imports: [
    CommonModule, 
    WaitingListRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule,
  ],
})
export class WaitingListModule { }
