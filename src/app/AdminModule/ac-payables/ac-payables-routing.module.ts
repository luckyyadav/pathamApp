import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'categories',
        loadChildren: () =>
          import('./categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
        data: {
          title: `ac-payables / categories`,
        },
      },
      {
        path: 'expenses',
        loadChildren: () =>
          import('./expenses/expenses.module').then(
            (m) => m.ExpensesModule
          ),
        data: {
          title: `ac-payables / expenses`,
        },
      },

      {
        path: 'suppliers',
        loadChildren: () =>
          import('./suppliers/suppliers.module').then(
            (m) => m.SuppliersModule
          ),
        data: {
          title: `ac-payables / suppliers`,
        },
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcPayablesRoutingModule { }
