import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'add-role',
    component: AddRoleComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
