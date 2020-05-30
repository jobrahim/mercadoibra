import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
       loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductsDetailsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },

{
  path: 'demo',
  component: DemoComponent
},
{
  path: '**',
  component: PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
