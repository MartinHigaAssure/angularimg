import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./components/pages/login/login-list/login-list.module').then(m => m.LoginListModule) },
  { path: 'register', loadChildren: () => import('./components/pages/login/login-detail/login-detail.module').then(m => m.LoginDetailModule)},
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
