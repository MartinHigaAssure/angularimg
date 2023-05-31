import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginListComponent } from './login-list/login-list.component';
import { LoginDetailComponent } from './login-detail/login-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginListComponent,
    LoginDetailComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LoginListComponent,
    LoginDetailComponent
  ]
})
export class LoginModule { }
