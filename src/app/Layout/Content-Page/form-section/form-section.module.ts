import { FormEditorComponent } from './form-editor/form-editor.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormAdvanceComponent } from './form-advance/form-advance.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NgModule, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSectionRoutingModule } from './form-section-routing.module';
import { ShareModule } from 'src/app/share/share.module';
declare var jQuery: any;

@NgModule({
  declarations: [
    BasicFormComponent
    , FormAdvanceComponent
    , FormWizardComponent
    , FileUploadComponent
    , FormEditorComponent
  ],
  imports: [
    CommonModule,
    FormSectionRoutingModule,
    ShareModule
  ]
})
export class FormSectionModule implements AfterViewInit {
  
  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();
  }
 }
