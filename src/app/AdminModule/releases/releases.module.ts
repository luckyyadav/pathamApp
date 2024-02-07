import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleasesComponent } from './releases.component';
import { ReleasesRoutingModule } from './releases-routing.module';
import { CommonImportModule } from '../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../featureModule/my-material.module';

/* Common Component import */
import { SharedCommonComponentModule } from './../SharedCommonComponentModule/sharedComponent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReleasesComponent],
  imports: [
    CommonModule,
    ReleasesRoutingModule,
    CommonImportModule,
    MyMaterialModule,
    SharedCommonComponentModule
  ],
})
export class ReleasesModule { }
