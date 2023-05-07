import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    username: new FormControl('')
  });

  constructor(private location: Location){

  };

  onSubmit(){
    console.log(this.signUpForm.value);
  };

  goBack(){
    this.location.back();
  }
}
