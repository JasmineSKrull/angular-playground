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
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    pnumber: new FormControl(''),
    email: new FormControl('', Validators.required),
    descript: new FormControl('', Validators.required),
  });

  formValues: any;
  error: boolean;
  formEmpty: boolean;
  formReview: boolean;
  formSuccess: boolean;
  firstName: any;
  lastName: any;
  number: any;
  email: any;
  description: any;

  constructor() { }

  submit(){
    this.formValues = this.submitForm.value;
    if(
      this.formValues.fname === '' || 
      this.formValues.lname === '' || 
      this.formValues.email === '' || 
      this.formValues.descript === ''
      ) {
      this.error = true
    } else {
      this.error = false;
      this.firstName = this.formValues.fname;
      this.lastName = this.formValues.lname;
      this.number = this.formValues.pnumber;
      this.email = this.formValues.email;
      this.description = this.formValues.descript;
      this.formEmpty = false;
      this.formReview = true;
      this.formSuccess = false;
    }
  }

  clearForm(){
    this.submitForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      pnumber: new FormControl(''),
      email: new FormControl('', Validators.required),
      descript: new FormControl('', Validators.required),
    });
  }

  resetForm(){
    this.clearForm();
    this.formEmpty = true;
    this.formReview = false;
    this.formSuccess = false;
  }

  success(){
    this.formEmpty = false;
    this.formReview = false;
    this.formSuccess = true;
  }

  back(){
    this.formEmpty = true;
    this.formReview = false;
    this.formSuccess = false;
  }

  ngOnInit(){
    this.formEmpty = true;
  }
}
