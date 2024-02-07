import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebPortalComponent } from './web-portal.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'logo', pathMatch: 'full' },
  {
    path: '',
    component: WebPortalComponent,
    children: [
      { path: 'logo', component: LogoComponent },
      { path: 'signature', component: SignatureComponent },
      { path: 'banner', component: BannerComponent },
      { path: 'news', component: NewsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'video', component: VideoComponent },
      { path: 'pageContent', component: PageContentComponent },
      { path: 'socicalLink', component: SocialLinkComponent },
      { path: 'schoolWebsite', component: SchoolWebsiteComponent },
      { path: 'addPhoto', component: AddPhotoComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPortalRoutingModule {}
