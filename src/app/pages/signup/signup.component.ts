import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

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

  constructor(private location: Location, private authService: AuthService){

  };

  onSubmit(){
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as string).then(cred =>{
      console.log(cred);
    }).catch(error=>{
      console.error(error);
    });
  };

  goBack(){
    this.location.back();
  }
}
