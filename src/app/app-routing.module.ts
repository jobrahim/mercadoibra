import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';



const routes: Routes = [
{
  path: 'home',
  component: HomeComponent
},
{
  path: '',
  component: HomeComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
