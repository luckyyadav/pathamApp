import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestpaperComponent } from './testpaper.component';

const routes: Routes = [
  {
    path: '',
    component: TestpaperComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestpaperRoutingModule { }
