import { NgModule, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousSectionRoutingModule } from './miscellaneous-section-routing.module';
import { ToastrNotificationsComponent } from './toastr-notifications/toastr-notifications.component';
import { ShareModule } from 'src/app/share/share.module';
import { NestableListComponent } from './nestable-list/nestable-list.component';
import { AgileBoardComponent } from './agile-board/agile-board.component';
import { TimelineSecondComponent } from './timeline-second/timeline-second.component';
import { DiffComponent } from './diff/diff.component';
import { I18supportComponent } from './i18support/i18support.component';
declare var jQuery: any;



@NgModule({
  declarations: [
    ToastrNotificationsComponent
    , NestableListComponent, AgileBoardComponent, TimelineSecondComponent, DiffComponent, I18supportComponent    
  ],
  imports: [
    CommonModule,
    MiscellaneousSectionRoutingModule,
    ShareModule
  ]
})
export class MiscellaneousSectionModule implements AfterViewInit
{

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();
  }

}
