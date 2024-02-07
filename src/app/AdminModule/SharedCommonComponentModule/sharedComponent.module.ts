import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PeopleList } from '../People/PeopleList/peopleList.component';
import { MyMaterialModule } from '../../featureModule/my-material.module';
import { MatTablelistComponent } from './commonAdminComponents/mat-tablelist/mat-tablelist.component';

import { ToastrModule } from 'ngx-toastr';
import { StylePaginatorDirective } from '../../directives/pagination.directive';

@NgModule({
  declarations: [PeopleList, MatTablelistComponent, StylePaginatorDirective],
  imports: [
    CommonModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      progressBar: true,
      progressAnimation: 'decreasing',
      closeButton: true,
      preventDuplicates: true,
    }),
  ],
  exports: [PeopleList, MyMaterialModule, MatTablelistComponent, ToastrModule],
  providers: [],
})
export class SharedCommonComponentModule {}
