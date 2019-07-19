import { MasonryComponent } from './masonry/masonry.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { LoadingButtonsComponent } from './loading-buttons/loading-buttons.component';
import { ValidationComponent } from './validation/validation.component';
import { ForumMainComponent } from './forum-main/forum-main.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { DiffComponent } from './diff/diff.component';
import { AgileBoardComponent } from './agile-board/agile-board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastrNotificationsComponent } from './toastr-notifications/toastr-notifications.component';
import { NestableListComponent } from './nestable-list/nestable-list.component';
import { TimelineSecondComponent } from './timeline-second/timeline-second.component';
import { I18supportComponent } from './i18support/i18support.component';
import { IdleTimerComponent } from './idle-timer/idle-timer.component';
import { TruncateComponent } from './truncate/truncate.component';
import { TinyconComponent } from './tinycon/tinycon.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TourComponent } from './tour/tour.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'notification' },
  { path: 'notification', component: ToastrNotificationsComponent },
  { path: 'nestable-list', component: NestableListComponent },
  { path: 'agile-board', component: AgileBoardComponent },
  { path: 'timeline-second', component: TimelineSecondComponent },
  { path: 'diff', component: DiffComponent },
  { path: 'i18support', component: I18supportComponent },
  { path: 'sweet-alert', component: SweetalertComponent },
  { path: 'idle-timer', component: IdleTimerComponent },
  { path: 'truncate', component: TruncateComponent },
  { path: 'spinners', component: SpinnersComponent },
  { path: 'tinycon', component: TinyconComponent },
  { path: 'google-maps', component: GoogleMapsComponent },
  { path: 'code-editor', component: CodeEditorComponent },
  { path: 'modal-window', component: ModalWindowComponent },
  { path: 'clipboard', component: ClipboardComponent },
  { path: 'forum-main', component: ForumMainComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'tree-view', component: TreeViewComponent },
  { path: 'loading-buttons', component: LoadingButtonsComponent },
  { path: 'chat-view', component: ChatViewComponent },
  { path: 'masonry', component: MasonryComponent },
  { path: 'tour', component: TourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscellaneousSectionRoutingModule { }
