import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { FooterComponent } from './footer/footer.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SimpleLoginComponent } from './simple-login/simple-login.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';

@NgModule({
  declarations: [
    BreadcrumbComponent
    , LeftPanelComponent
    , TopHeaderComponent
    , FooterComponent
    , LockScreenComponent
    , SimpleLoginComponent
    , Error404Component
    , Error500Component
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  exports: [
    BreadcrumbComponent
    , LeftPanelComponent
    , TopHeaderComponent
    , FooterComponent
    , LockScreenComponent
    , Error404Component
    , Error500Component
  ]
})
export class ShareModule { }
