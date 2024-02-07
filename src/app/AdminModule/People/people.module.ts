import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { AlumniComponent } from './alumni/alumni.component';
import { OthersComponent } from './others/others.component';
import { ParentsComponent } from './parents/parents.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { CommonImportModule } from '../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../featureModule/my-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    CommonImportModule,
    MyMaterialModule,
  ],
  exports: [],
})
export class PeopleModule {}
