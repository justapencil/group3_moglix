import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layouts/landing/landing.component';
import { SignupComponent } from './user/components/signup/signup.component';

const routes: Routes = [


  {
    path: '',
    component:LandingComponent
  },
  {
    path: 'user',
    loadChildren:() => import('./user/user.module').then(m =>m.UserModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
