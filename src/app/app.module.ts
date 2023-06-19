import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { UserComponent } from './shared/component/user/user.component';
import { ChartComponent } from './shared/component/chart/chart.component';
import { IconComponent } from './shared/component/icon/icon.component';
import { NavComponent } from './shared/component/nav/nav.component';
import { LoginComponent } from './shared/component/login/login.component';
import { TableComponent } from './shared/component/table/table.component';
import { FormComponent } from './shared/component/form/form.component';
import { DropdownDirective } from './shared/directive/dropdown.directive';
import { ShowhidedropdownDirective } from './shared/directive/showhidedropdown.directive';
import { Dropdown2Directive } from './shared/directive/dropdown2.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table'
import{HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator'
import { ReactiveFormsModule } from '@angular/forms';
import { ShelftoogrleDirective } from './shared/directive/shelftoogrle.directive';
import { ToggletableandformDirective } from './shared/directive/toggletableandform.directive';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    ChartComponent,
    IconComponent,
    NavComponent,
    LoginComponent,
    TableComponent,
    FormComponent,
    DropdownDirective,
    ShowhidedropdownDirective,
    Dropdown2Directive,
    ShelftoogrleDirective,
    ToggletableandformDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
