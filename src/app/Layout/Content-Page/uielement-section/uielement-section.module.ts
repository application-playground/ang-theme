import { NgModule, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIElementSectionRoutingModule } from './uielement-section-routing.module';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { DraggablePanelsComponent } from './draggable-panels/draggable-panels.component';
import { ResizeablePanelsComponent } from './resizeable-panels/resizeable-panels.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { VideoComponent } from './video/video.component';
import { TabsPanelsComponent } from './tabs-panels/tabs-panels.component';
import { TabsComponent } from './tabs/tabs.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BadgesLabelsComponent } from './badges-labels/badges-labels.component';
import { ShareModule } from 'src/app/share/share.module';
declare var jQuery: any;

@NgModule({
  declarations: [
    TypographyComponent
    , IconsComponent
    , DraggablePanelsComponent
    , ResizeablePanelsComponent
    , ButtonsComponent
    , VideoComponent
    , TabsPanelsComponent
    , TabsComponent
    , NotificationsComponent
    , BadgesLabelsComponent],
  imports: [
    CommonModule,
    UIElementSectionRoutingModule,
    ShareModule
  ]
})
export class UIElementSectionModule implements AfterViewInit {

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();
  }

 }
