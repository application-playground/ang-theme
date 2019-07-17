import { FormEditorComponent } from './form-editor/form-editor.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormAdvanceComponent } from './form-advance/form-advance.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSectionRoutingModule } from './form-section-routing.module';
import { ShareModule } from 'src/app/share/share.module';

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
export class FormSectionModule { }
