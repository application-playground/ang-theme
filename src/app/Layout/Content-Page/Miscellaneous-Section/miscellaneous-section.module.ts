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
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { IdleTimerComponent } from './idle-timer/idle-timer.component';
import { TruncateComponent } from './truncate/truncate.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { TinyconComponent } from './tinycon/tinycon.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { ForumMainComponent } from './forum-main/forum-main.component';
import { ValidationComponent } from './validation/validation.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { LoadingButtonsComponent } from './loading-buttons/loading-buttons.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { MasonryComponent } from './masonry/masonry.component';
import { TourComponent } from './tour/tour.component';
declare var jQuery: any;



@NgModule({
  declarations: [
    ToastrNotificationsComponent
    , NestableListComponent, AgileBoardComponent, TimelineSecondComponent, DiffComponent, I18supportComponent, SweetalertComponent, IdleTimerComponent, TruncateComponent, SpinnersComponent, TinyconComponent, GoogleMapsComponent, CodeEditorComponent, ModalWindowComponent, ClipboardComponent, ForumMainComponent, ValidationComponent, TreeViewComponent, LoadingButtonsComponent, ChatViewComponent, MasonryComponent, TourComponent    
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
