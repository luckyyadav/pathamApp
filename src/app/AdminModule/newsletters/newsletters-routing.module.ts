import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewslettersComponent } from './newsletters.component';

const routes: Routes = [{ path: '', component: NewslettersComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NewslettersRoutingModule {}
