import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { CatalogFormComponent } from './components/catalog-form/catalog-form.component';


@NgModule({
  declarations: [
    CatalogListComponent,
    CatalogFormComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
