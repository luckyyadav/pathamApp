import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemGroupRoutingModule } from './item-group-routing.module';
import { ItemGroupComponent } from './item-group.component';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [ItemGroupComponent],
  imports: [CommonModule, ItemGroupRoutingModule, SharedCommonComponentModule],
})
export class ItemGroupModule {}
