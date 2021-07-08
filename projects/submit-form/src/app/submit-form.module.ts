import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SubmitFormRoutingModule } from './submit-form-routing.module';
import { SubmitFormComponent } from './submit-form.component';

@NgModule({
  declarations: [
    SubmitFormComponent
  ],
  imports: [
    BrowserModule,
    SubmitFormRoutingModule
  ],
  providers: [],
  bootstrap: [SubmitFormComponent]
})
export class SubmitFormModule { }
