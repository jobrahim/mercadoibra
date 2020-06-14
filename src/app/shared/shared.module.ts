import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { RouterModule } from '@angular/router';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    FooterComponent,
    ExponentialPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class SharedModule { }
