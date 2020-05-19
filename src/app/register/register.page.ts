import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
  )  { 
    this.form = this.formBuilder.group({
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

  ngOnInit() {
  }

}
