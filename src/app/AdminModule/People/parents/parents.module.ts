import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentsComponent } from './parents.component';
import { ParentsRoutingModule } from './parents-routing.module';
import { PeopleFormService } from '../service/Peopleform.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component module with material module*/
import { CommonImportModule } from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [ParentsComponent],
  imports: [
    CommonModule,
    ParentsRoutingModule,
    CommonImportModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [PeopleFormService],
})
export class ParentsModule {}
