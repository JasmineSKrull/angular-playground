import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitFormComponent } from 'projects/submit-form/src/app/submit-form.component';

const routes: Routes = [
  {path: '', component: SubmitFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
