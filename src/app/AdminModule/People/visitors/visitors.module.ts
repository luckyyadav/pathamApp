import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorsComponent } from './visitors.component';
import { VisitorsRoutingModule } from './visitors-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Common Component module with material module*/
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [VisitorsComponent],
  imports: [
    CommonModule,
    VisitorsRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ],
})
export class VisitorsModule {}
