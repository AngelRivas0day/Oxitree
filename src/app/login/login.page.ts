import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from '../shared/services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private apiService: ApiService,
    private router: Router,
  )  { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.minLength(8)
      ]))
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.apiService.login(this.loginForm.value);
    setTimeout(()=>{
      if(localStorage.getItem('access_token')){
        this.router.navigateByUrl('/dashboard');
      }
    },1000);
  }

  goToRegister(){
    this.navCtrl.navigateForward('/register');
  }

}
