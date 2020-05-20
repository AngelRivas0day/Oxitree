import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api/api.service';



@NgModule({
  declarations: [
    ApiService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
