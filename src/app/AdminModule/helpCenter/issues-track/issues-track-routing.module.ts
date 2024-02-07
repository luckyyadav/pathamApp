import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IssuesTrackComponent } from './issues-track.component';

const routes: Routes = [{ path: '', component: IssuesTrackComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssuesTrackRoutingModule {}
