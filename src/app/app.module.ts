import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BasicGalleryComponent } from './Layout/Content-Page/basic-gallery/basic-gallery.component';
import { BasicTableComponent } from './Layout/Content-Page/basic-table/basic-table.component';
import { SuperAdminComponent } from './Multi-Layout/super-admin/super-admin.component';
import { Client1Component } from './Multi-Layout/client1/client1.component';
import { Client2Component } from './Multi-Layout/client2/client2.component';
import { DashboardFirstComponent } from './Layout/Content-Page/dashboard-first/dashboard-first.component';
import { BasicFormComponent } from './Layout/Content-Page/basic-form/basic-form.component';
import { FormAdvanceComponent } from './Layout/Content-Page/form-advance/form-advance.component';
import { LoginComponent } from './Layout/Content-Page/login/login.component';
import { RegistrationComponent } from './Layout/Content-Page/registration/registration.component';
import { ForgetPasswordComponent } from './Layout/Content-Page/forget-password/forget-password.component';
import { FormWizardComponent } from './Layout/Content-Page/form-wizard/form-wizard.component';
import { FileUploadComponent } from './Layout/Content-Page/file-upload/file-upload.component';
import { FormEditorComponent } from './Layout/Content-Page/form-editor/form-editor.component';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    BasicGalleryComponent,
    BasicTableComponent,
    SuperAdminComponent,
    Client1Component,
    Client2Component,
    DashboardFirstComponent,
    BasicFormComponent,
    FormAdvanceComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    FormWizardComponent,
    FileUploadComponent,
    FormEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
