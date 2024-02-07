import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsComponent } from '../graphs/graphs.component';
import { GraphsRoutingModule } from './graphs-routing.module';



@NgModule({
  declarations: [
    GraphsComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule
  ]
})
export class GraphsModule { }
