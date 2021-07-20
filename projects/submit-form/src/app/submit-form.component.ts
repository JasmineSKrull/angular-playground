import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  title = 'Submit Form';

  submitForm = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    pnumber: new FormControl(),
    email: new FormControl(),
    descript: new FormControl(),
  });

  formValues: any;

  constructor() { }

  submit(){
    this.formValues = this.submitForm.value;
    console.log(this.formValues)
  }

  ngOnInit(){

  }
}
