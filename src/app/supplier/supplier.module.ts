import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PendingComponent } from './components/pending/pending.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { PendingDetailsComponent } from './components/pending-details/pending-details.component';
import { CompletedComponent } from './components/completed/completed.component';
import { UpdateComponent } from './components/update/update.component';
import { SellComponent } from './components/sell/sell.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PendingComponent,
    InventoryComponent,
    PendingDetailsComponent,
    CompletedComponent,
    UpdateComponent,
    SellComponent
  ],
  imports: [
    CommonModule,FormsModule,SharedModule,HttpClientModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
