import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesTrackRoutingModule } from './issues-track-routing.module';
import { IssuesTrackComponent } from './issues-track.component';

/* Common Component import */
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IssuesTrackComponent],
  imports: [
    CommonModule,
    IssuesTrackRoutingModule,
    SharedCommonComponentModule,
  ],
})
export class IssuesTrackModule {}
