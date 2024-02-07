import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherComponent} from './teacher.component';
import {TeacherRoutingModule} from './teacher-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Common Component module with material module*/
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
    declarations: [TeacherComponent],
    imports: [ 
        CommonModule,
        TeacherRoutingModule,
        SharedCommonComponentModule,
        FormsModule,
        ReactiveFormsModule,
        CommonImportModule
    ],
    exports: [],
    providers: [],
})
export class TeacherModule {}