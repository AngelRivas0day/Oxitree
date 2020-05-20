import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from '../shared/services/api/api.service';


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
    private apiService: ApiService
  )  { 
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.minLength(8)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.minLength(8)
      ])),
      role: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form.value);
    this.form.value.role = 0;
    this.apiService.post('admin/register', this.form.value).subscribe((resp:any)=>{
      console.log(resp);
    });
  }

}
