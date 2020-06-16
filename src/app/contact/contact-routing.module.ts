import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactComponent } from 'mercadoibra/src/app/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: ContactComponent
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
export class ContactRoutingModule {}