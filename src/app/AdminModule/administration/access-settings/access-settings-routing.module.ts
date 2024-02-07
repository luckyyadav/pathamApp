import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccessSettingsComponent } from './access-settings.component'

const routes: Routes = [
  { path: '', component: AccessSettingsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AccessSettingsRoutingModule { }
