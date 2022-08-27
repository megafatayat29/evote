import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifiedEmailRoutingModule } from './verified-email-routing.module';
import { VerifiedEmailComponent } from './verified-email.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VerifiedEmailService } from './verified-email.service';


@NgModule({
  declarations: [
    VerifiedEmailComponent
  ],
  imports: [
    CommonModule,
    VerifiedEmailRoutingModule,
    SharedModule
  ],
  providers: [
    VerifiedEmailService
  ]
})
export class VerifiedEmailModule { }
