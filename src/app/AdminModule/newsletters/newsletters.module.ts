import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewslettersRoutingModule } from './newsletters-routing.module';

/* Common Component import */

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedCommonComponentModule } from '../SharedCommonComponentModule/sharedComponent.module';
import { NewslettersComponent } from './newsletters.component';

@NgModule({
  declarations: [NewslettersComponent],
  imports: [
    CommonModule,
    NewslettersRoutingModule,
    SharedCommonComponentModule,
  ],
})
export class NewslettersModule {}
