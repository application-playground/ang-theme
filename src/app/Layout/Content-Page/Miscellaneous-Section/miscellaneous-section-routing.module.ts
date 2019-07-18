import { DiffComponent } from './diff/diff.component';
import { AgileBoardComponent } from './agile-board/agile-board.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastrNotificationsComponent } from './toastr-notifications/toastr-notifications.component';
import { NestableListComponent } from './nestable-list/nestable-list.component';
import { TimelineSecondComponent } from './timeline-second/timeline-second.component';
import { I18supportComponent } from './i18support/i18support.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'notification' },
  { path: 'notification', component: ToastrNotificationsComponent },
  { path: 'nestable-list', component: NestableListComponent },
  { path: 'agile-board', component: AgileBoardComponent },
  { path: 'timeline-second', component: TimelineSecondComponent },
  { path: 'diff', component: DiffComponent },
  { path: 'i18support', component: I18supportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscellaneousSectionRoutingModule { }
