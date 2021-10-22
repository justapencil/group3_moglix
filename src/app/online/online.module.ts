import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineRoutingModule } from './online-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,HttpClientModule,FormsModule,
    SharedModule,
    OnlineRoutingModule
  ]
})
export class OnlineModule { }
