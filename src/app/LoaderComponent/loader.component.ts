import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/WebServices/webservices.service';

@Component({
  selector: 'app-loader',
  template: `<div class="loader-overlay" *ngIf="isLoading">
    <div class="loader"></div>
  </div> `,
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isLoading = false;
  constructor(private webServcices: WebService) {}

  ngOnInit() {
    this.webServcices.loaderState.subscribe((state: boolean) => {
      this.isLoading = state;
    });
  }
}
