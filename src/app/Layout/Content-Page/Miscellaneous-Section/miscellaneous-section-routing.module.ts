import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastrNotificationsComponent } from './toastr-notifications/toastr-notifications.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'notification' },
  { path: 'notification', component: ToastrNotificationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscellaneousSectionRoutingModule { }
