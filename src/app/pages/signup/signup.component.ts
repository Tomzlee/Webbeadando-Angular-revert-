import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    rePassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(private location: Location, private authService: AuthService, private userService: UserService){

  };

  onSubmit(){
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as string).then(cred =>{
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value as string,
        username: this.signUpForm.get('username')?.value as string

      };
      this.userService.create(user).then(_ => {
        console.log('User added successfully')
      }).catch(error=>{
        console.error(error);
      });
    }).catch(error=>{
      console.error(error);
    });
  };

  goBack(){
    this.location.back();
  }
}
