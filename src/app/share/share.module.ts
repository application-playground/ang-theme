import { FooterComponent } from './footer/footer.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { TopHeaderComponent } from './top-header/top-header.component';

@NgModule({
  declarations: [
    BreadcrumbComponent
    , LeftPanelComponent
    , TopHeaderComponent
    , FooterComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  exports: [
    BreadcrumbComponent
    , LeftPanelComponent
    , TopHeaderComponent
    , FooterComponent]
})
export class ShareModule { }
