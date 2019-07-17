import { SearchResultComponent } from './search-result/search-result.component';
import { ShareModule } from './../../../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherPageRoutingModule } from './other-page-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    SearchResultComponent
    , InvoiceComponent
    , EmptyComponent
  ],
  imports: [
    CommonModule,
    OtherPageRoutingModule,
    ShareModule
  ]
})
export class OtherPageModule { }
