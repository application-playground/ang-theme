import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormAdvanceComponent } from './form-advance/form-advance.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormEditorComponent } from './form-editor/form-editor.component';

const routes: Routes = [
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'form-advance', component: FormAdvanceComponent },
  { path: 'form-wizard', component: FormWizardComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'form-editors', component: FormEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormSectionRoutingModule { }
