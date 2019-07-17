import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousSectionRoutingModule } from './miscellaneous-section-routing.module';
import { ToastrNotificationsComponent } from './toastr-notifications/toastr-notifications.component';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  declarations: [ToastrNotificationsComponent],
  imports: [
    CommonModule,
    MiscellaneousSectionRoutingModule,
    ShareModule
  ]
})
export class MiscellaneousSectionModule { }
