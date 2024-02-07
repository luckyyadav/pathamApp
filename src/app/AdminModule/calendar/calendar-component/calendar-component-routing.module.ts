import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponentComponent } from './calendar-component.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponentComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarComponentRoutingModule {}
