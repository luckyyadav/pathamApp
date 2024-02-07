import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessSettingsRoutingModule } from './access-settings-routing.module';
import { AccessSettingsComponent } from './access-settings.component';

import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [AccessSettingsComponent],
  imports: [
    CommonModule,
    AccessSettingsRoutingModule,
    SharedCommonComponentModule
  ]
})
export class AccessSettingsModule { }
