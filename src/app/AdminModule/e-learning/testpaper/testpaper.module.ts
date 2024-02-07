import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestpaperComponent } from './testpaper.component';
import { TestpaperRoutingModule } from './testpaper-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
  declarations: [TestpaperComponent],
  imports: [
    CommonModule,
    TestpaperRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ]
})
export class TestpaperModule { }
