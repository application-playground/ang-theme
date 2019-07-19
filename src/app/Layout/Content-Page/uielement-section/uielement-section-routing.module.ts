import { BadgesLabelsComponent } from './badges-labels/badges-labels.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsPanelsComponent } from './tabs-panels/tabs-panels.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { DraggablePanelsComponent } from './draggable-panels/draggable-panels.component';
import { ResizeablePanelsComponent } from './resizeable-panels/resizeable-panels.component';
import { VideoComponent } from './video/video.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'typography' },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'draggable-panels', component: DraggablePanelsComponent },
  { path: 'resizeable-panels', component: ResizeablePanelsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'video', component: VideoComponent },
  { path: 'tabs-panels', component: TabsPanelsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'badges-labels', component: BadgesLabelsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIElementSectionRoutingModule { }
