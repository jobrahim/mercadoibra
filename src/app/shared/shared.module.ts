import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
