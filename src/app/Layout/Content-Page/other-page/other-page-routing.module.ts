import { SearchResultComponent } from './search-result/search-result.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search-result' },
  { path: 'search-result', component: SearchResultComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'empty', component: EmptyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherPageRoutingModule { }
