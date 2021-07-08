import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitFormComponent } from './submit-form.component';

const routes: Routes = [
  {path: 'submit-form', component: SubmitFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SubmitFormRoutingModule { }
