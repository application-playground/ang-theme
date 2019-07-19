import { SimpleLoginComponent } from './share/simple-login/simple-login.component';

import { ForgetPasswordComponent } from './share/forget-password/forget-password.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './Multi-Layout/super-admin/super-admin.component';
import { Client1Component } from './Multi-Layout/client1/client1.component';
import { Client2Component } from './Multi-Layout/client2/client2.component';
import { DashboardFirstComponent } from './Layout/Content-Page/dashboard-first/dashboard-first.component';
import { LoginComponent } from './share/login/login.component';
import { RegistrationComponent } from './share/registration/registration.component';
import { LockScreenComponent } from './share/lock-screen/lock-screen.component';
import { Error404Component } from './share/error404/error404.component';
import { Error500Component } from './share/error500/error500.component';

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
  { path: 'login', component: LoginComponent },
  { path: 'simple-login', component: SimpleLoginComponent },
  { path: 'register', component: RegistrationComponent },
  
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'lock-screen', component: LockScreenComponent },
  { path: '404', component: Error404Component },
  { path: '500', component: Error500Component },
  
  {
    path: 'template', component: SuperAdminComponent,
    children: [
      { path: 'dashboard-first', component: DashboardFirstComponent },      
      { path: 'forms', loadChildren: './Layout/Content-Page/form-section/form-section.module#FormSectionModule' },
      { path: 'app-view', loadChildren: './Layout/Content-Page/app-view/app-view.module#AppViewModule' },
      { path: 'other-view', loadChildren: './Layout/Content-Page/other-page/other-page.module#OtherPageModule' },
      { path: 'miss', loadChildren: './Layout/Content-Page/Miscellaneous-Section/miscellaneous-section.module#MiscellaneousSectionModule' },
      { path: 'ui-view', loadChildren: './Layout/Content-Page/uielement-section/uielement-section.module#UIElementSectionModule' }
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
