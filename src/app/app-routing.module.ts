import { FormAdvanceComponent } from './Layout/Content-Page/form-advance/form-advance.component';
import { BasicFormComponent } from './Layout/Content-Page/basic-form/basic-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './Multi-Layout/super-admin/super-admin.component';
import { Client1Component } from './Multi-Layout/client1/client1.component';
import { Client2Component } from './Multi-Layout/client2/client2.component';
import { DashboardFirstComponent } from './Layout/Content-Page/dashboard-first/dashboard-first.component';

const routes: Routes = [
  
  // Super-admin routes goes here
  { path: 'super-admin', component: SuperAdminComponent, children: [] },

  // client 1 routes goes here here
  { path: 'client1', component: Client1Component, children: [] },
  
  // client 2 routes goes here here
  { path: 'client2', component: Client2Component,  children: [] },

  // Super-admin layout routes
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

  // Application Template routes goes here
  {
    path: 'template', component: SuperAdminComponent,
    children: [
      { path: 'dashboard-first', component: DashboardFirstComponent },
      { path: 'basic-form', component: BasicFormComponent },
      { path: 'form-advance', component: FormAdvanceComponent },
    ]
  },
  
  // Content Page Redirection
  { path: '**', redirectTo: 'template' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
