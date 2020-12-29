import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginScreenComponent,
  },
  {
    path:'dashboard',
    component:DashboardScreenComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
