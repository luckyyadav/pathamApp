import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksheetSettingsRoutingModule } from './marksheet-settings-routing.module';
import { MarksheetSettingsComponent } from './marksheet-settings.component';

import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [MarksheetSettingsComponent],
  imports: [
    CommonModule,
    MarksheetSettingsRoutingModule,
    SharedCommonComponentModule,
  ],
})
export class MarksheetSettingsModule {}
