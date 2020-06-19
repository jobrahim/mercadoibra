import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './components/pagenotfound.component';
import { SharedModule } from './../shared/shared.module';
import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';



@NgModule({
  declarations: [
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagenotfoundRoutingModule
  ]
})
export class PagenotfoundModule { }
