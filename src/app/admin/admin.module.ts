import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { AddUserByRoleComponent } from './components/add-user-by-role/add-user-by-role.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddRoleComponent,
    AddUserByRoleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
