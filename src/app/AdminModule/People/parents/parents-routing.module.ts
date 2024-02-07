import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentsComponent } from './parents.component';
import { Address } from '../pstForm/Address';
import { PersonalDetails } from '../pstForm/PersonalDetails';
import { Documents } from '../pstForm/Documents';
import { HealthRecords } from '../pstForm/HealthRecords';
import { Faimily } from '../pstForm/Faimily';
import { Transportation } from '../pstForm/Transportation';

const routes: Routes = [
  {
    path: '',
    component: ParentsComponent,
    /*  children: [
      {
        path: '',
        children: [
          { path: 'address', component: Address },
          { path: 'personaldetails', component: PersonalDetails },
          { path: 'documents', component: Documents },
          { path: 'healthrecords', component: HealthRecords },
          { path: 'faimily', component: Faimily },
          { path: 'transportation', component: Transportation },
          { path: '', redirectTo: 'personaldetails', pathMatch: 'full' },
        ],
      },
    ], */
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentsRoutingModule {}
