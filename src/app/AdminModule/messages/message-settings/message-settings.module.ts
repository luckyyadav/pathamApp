import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageSettingsRoutingModule } from './message-settings-routing.module';
import { MessageSettingsComponent } from './message-settings.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MessageSettingsComponent],
  imports: [
    CommonModule,
    MessageSettingsRoutingModule
  ],
  exports: [RouterModule]
})
export class MessageSettingsModule { }
