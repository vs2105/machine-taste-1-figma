import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { UserComponent } from './shared/component/user/user.component';
import { ChartComponent } from './shared/component/chart/chart.component';
import { TableComponent } from './shared/component/table/table.component';
import { FormComponent } from './shared/component/form/form.component';
import { LoginComponent } from './shared/component/login/login.component';
import { AuthGuardService } from './service/auth.guard.service';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'home',component:DashboardComponent,
     canActivate:[AuthGuardService]
  },
  // {
  //   path:'user', component:UserComponent, canActivate:[AuthGuardService]
  // },
  {
    path:'chart', component:ChartComponent,canActivate:[AuthGuardService]
  },
  {
    path:'table', component:TableComponent,canActivate:[AuthGuardService]
  },
  {
    path:'form', component:FormComponent,canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
