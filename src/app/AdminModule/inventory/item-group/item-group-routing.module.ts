import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemGroupComponent } from './item-group.component';

const routes: Routes = [{ path: '', component: ItemGroupComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemGroupRoutingModule {}
