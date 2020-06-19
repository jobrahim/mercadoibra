import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound.component';


const routes: Routes = [
  {
    path: '',
    component: PagenotfoundComponent
  }
];

@NgModule({
   imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PagenotfoundRoutingModule { }
