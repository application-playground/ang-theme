import { ContactComponent } from './contact/contact.component';
import { ShareModule } from './../../../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppViewRoutingModule } from './app-view-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    ContactComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AppViewRoutingModule,
    ShareModule
  ],
})
export class AppViewModule { }
