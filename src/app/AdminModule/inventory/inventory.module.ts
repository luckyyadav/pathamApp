import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InventoryRoutingModule } from './inventory-routing.module';
// import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, InventoryRoutingModule, ReactiveFormsModule],
})
export class InventoryModule {}
