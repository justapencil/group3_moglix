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
  },
  { 
    path:'online',
    loadChildren:() => import('./online/online.module').then(m => m.OnlineModule)
  },
  { 
    path:'admin',
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
