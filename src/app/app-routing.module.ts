import { SimpleLoginComponent } from './share/simple-login/simple-login.component';
import { FormEditorComponent } from './Layout/Content-Page/form-editor/form-editor.component';
import { FileUploadComponent } from './Layout/Content-Page/file-upload/file-upload.component';
import { FormWizardComponent } from './Layout/Content-Page/form-wizard/form-wizard.component';
import { ForgetPasswordComponent } from './Layout/Content-Page/forget-password/forget-password.component';
import { FormAdvanceComponent } from './Layout/Content-Page/form-advance/form-advance.component';
import { BasicFormComponent } from './Layout/Content-Page/basic-form/basic-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './Multi-Layout/super-admin/super-admin.component';
import { Client1Component } from './Multi-Layout/client1/client1.component';
import { Client2Component } from './Multi-Layout/client2/client2.component';
import { DashboardFirstComponent } from './Layout/Content-Page/dashboard-first/dashboard-first.component';
import { LoginComponent } from './Layout/Content-Page/login/login.component';
import { RegistrationComponent } from './Layout/Content-Page/registration/registration.component';
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
      { path: 'basic-form', component: BasicFormComponent },
      { path: 'form-advance', component: FormAdvanceComponent },
      { path: 'form-wizard', component: FormWizardComponent },   
      { path: 'file-upload', component: FileUploadComponent },
      { path: 'form-editors', component: FormEditorComponent },
      { path: 'app-view', loadChildren: './Layout/Content-Page/app-view/app-view.module#AppViewModule' },
      { path: 'other-view', loadChildren: './Layout/Content-Page/other-page/other-page.module#OtherPageModule' }
      
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
