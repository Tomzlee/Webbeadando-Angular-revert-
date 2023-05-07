import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy{
  email = new FormControl('');
  password = new FormControl('');


  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;
  
  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService){};

  async login(){
    this.loading = true;
    //Promise
    /*
    this.loadingService.loadingWithPromise(this.email.value as string,this.password.value as string).then((_: boolean)=>{
      this.router.navigateByUrl('/main')

    }).catch(error =>{
      console.error(error,'Incorrect email or password');
    }).finally(()=>{
      console.log('this is executed finally.');
    });

    //async-await
    try {
      const _ = await this.loadingService.loadingWithPromise(this.email.value as string,this.password.value as string);
    } catch (error) {
      console.error(error,'Incorrect email or password');
    }
    console.log('this is executed finally.');
    */

     // Observable
    // memory leak
    /*this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value as string, this.password.value as string)
    this.loadingSubscription = this.loadingObservation
      .subscribe(
        {
          next: (data: boolean) => {
            console.log(data);
            this.router.navigateByUrl('/main')
          }, error: (error) => {
            console.error(error);
            this.loading=false;
          }, complete: () => {
            console.log('finally');
            this.loading=false;

          }
        }
      );*/

      this.authService.login(this.email.value as string,this.password.value as string).then(cred =>{
        console.log(cred);
        this.router.navigateByUrl('/main');
        this.loading = false;

      }).catch(error =>{
        console.error(error);
        this.loading = false;

      });
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }
    
      
   
 
}

