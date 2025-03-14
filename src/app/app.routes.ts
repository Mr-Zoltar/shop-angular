import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  // {
  //   path: 'siatkowka',
  //   component: SiatkowkaComponent,
  // },
  // {
  //   path: 'siatkowka/:id',
  //   component: ShowMoreComponent,
  // },
  {
    path: '**',
    redirectTo: 'products',
  },
];
