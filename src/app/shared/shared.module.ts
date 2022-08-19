import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { ValidationMessageComponent } from './component/validation-message/validation-message.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ValidationMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
