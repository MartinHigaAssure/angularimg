import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDetailComponent } from './login-detail.component';

const routes: Routes = [{ path: '', component: LoginDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginDetailRoutingModule { }
