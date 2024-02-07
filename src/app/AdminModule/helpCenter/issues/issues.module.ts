import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './issues.component';
import { IssuesRoutingModule } from './issues-routing.module';

/* Common Component import */
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IssuesComponent],
  imports: [CommonModule, IssuesRoutingModule, SharedCommonComponentModule],
})
export class IssuesModule {}
