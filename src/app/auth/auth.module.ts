import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthListComponent } from './components/auth-list/auth-list.component';


@NgModule({
  declarations: [
    AuthFormComponent,
    AuthListComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
