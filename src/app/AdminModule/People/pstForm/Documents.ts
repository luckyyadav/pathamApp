import { Component, OnInit } from '@angular/core';
import { PeopleFormService } from '../service/Peopleform.service';
import { Router } from '@angular/router';

@Component({
  template: ` <h1>Doc</h1> `,
  imports: [],
  standalone: true,
})
export class Documents implements OnInit {
  PeopleFormService: any;

  constructor(
    public peopleFormService: PeopleFormService,
    private router: Router
  ) {}

  ngOnInit() {
    //this.PeopleFormService = this.peopleFormService;
  }

  complete() {
    this.peopleFormService.complete();
  }

  prevPage() {
    this.router.navigate(['steps/payment']);
  }
}
