import { FAQComponent } from './faq/faq.component';
import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './blog/blog.component';
import { IssueTrackerComponent } from './issue-tracker/issue-tracker.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClientComponent } from './client/client.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { VoteListComponent } from './vote-list/vote-list.component';
import { FullHeightComponent } from './full-height/full-height.component';
import { Client1Component } from './../../../Multi-Layout/client1/client1.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { ContactSecondComponent } from './contact-second/contact-second.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from 'src/app/share/share.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSecondComponent } from './profile-second/profile-second.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TeamBoardComponent } from './team-board/team-board.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PinBoardComponent } from './pin-board/pin-board.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'contact' },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile-second', component: ProfileSecondComponent },
  { path: 'contact-second', component: ContactSecondComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'project-detail', component: ProjectDetailComponent },
  { path: 'team-board', component: TeamBoardComponent },
  { path: 'social-feed', component: SocialFeedComponent },
  { path: 'client-app', component: ClientComponent },
  { path: 'full-height', component: FullHeightComponent },
  { path: 'vote-list', component: VoteListComponent },
  { path: 'file-manager', component: FileManagerComponent },  
  { path: 'calendar', component: CalendarComponent },
  { path: 'issue-tracker', component: IssueTrackerComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'pin-board', component: PinBoardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ShareModule],
  exports: [RouterModule]
})
export class AppViewRoutingModule {
  
  constructor() { }
 }
