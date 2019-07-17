import { ContactComponent } from './contact/contact.component';
import { ShareModule } from './../../../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppViewRoutingModule } from './app-view-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSecondComponent } from './profile-second/profile-second.component';
import { ContactSecondComponent } from './contact-second/contact-second.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TeamBoardComponent } from './team-board/team-board.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { ClientComponent } from './client/client.component';
import { FullHeightComponent } from './full-height/full-height.component';
import { VoteListComponent } from './vote-list/vote-list.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { CalendarComponent } from './calendar/calendar.component';
import { IssueTrackerComponent } from './issue-tracker/issue-tracker.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { FAQComponent } from './faq/faq.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PinBoardComponent } from './pin-board/pin-board.component';

@NgModule({
  declarations: [
    ContactComponent,
    ProfileComponent,
    ProfileSecondComponent,
    ContactSecondComponent,
    ProjectComponent,
    ProjectDetailComponent,
    TeamBoardComponent,
    SocialFeedComponent,
    ClientComponent,
    FullHeightComponent,
    VoteListComponent,
    FileManagerComponent,
    CalendarComponent,
    IssueTrackerComponent,
    BlogComponent,
    ArticleComponent,
    FAQComponent,
    TimelineComponent,
    PinBoardComponent
  ],
  imports: [
    CommonModule,
    AppViewRoutingModule,
    ShareModule
  ],
})
export class AppViewModule { }
