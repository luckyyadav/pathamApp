import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebPortalRoutingModule } from './web-portal-routing.module';
import { WebPortalComponent } from './web-portal.component';
import { MyMaterialModule } from '../../../featureModule/my-material.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';
import { LogoComponent } from './logo/logo.component';
import { SignatureComponent } from './signature/signature.component';
import { BannerComponent } from './banner/banner.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { VideoComponent } from './video/video.component';
import { PageContentComponent } from './page-content/page-content.component';
import { SocialLinkComponent } from './social-link/social-link.component';
import { SchoolWebsiteComponent } from './school-website/school-website.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';

@NgModule({
  declarations: [WebPortalComponent, LogoComponent, SignatureComponent, BannerComponent, NewsComponent, EventsComponent, VideoComponent, PageContentComponent, SocialLinkComponent, SchoolWebsiteComponent, AddPhotoComponent],
  imports: [
    CommonModule,
    WebPortalRoutingModule,
    MyMaterialModule,
    SharedCommonComponentModule,
  ],
})
export class WebPortalModule {}
