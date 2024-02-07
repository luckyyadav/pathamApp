import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-web-portal',
  templateUrl: './web-portal.component.html',
  styleUrls: ['./web-portal.component.scss'],
})
export class WebPortalComponent implements OnInit {
  constructor(private activeLink: ActivatedRoute) {}

  listItem = [
    { itemName: 'Logo', routeLink: 'logo' },
    { itemName: 'Signature', routeLink: 'signature' },
    { itemName: 'Banner', routeLink: 'banner' },
    { itemName: 'News', routeLink: 'news' },
    { itemName: 'Events', routeLink: 'events' },
    { itemName: 'Video', routeLink: 'video' },
    { itemName: 'Page Content', routeLink: 'pageContent' },
    { itemName: 'Social Link', routeLink: 'socicalLink' },
    { itemName: 'School Website', routeLink: 'schoolWebsite' },
    { itemName: 'Add Photo', routeLink: 'addPhoto' },
  ];

  selectedItem: string | null = 'Logo';

  selectItem(item: string) {
    //   this.selectedItem = item;
  }

  ngOnInit() {
    console.log('NgONint');
    const currentUrl = this.activeLink.snapshot.url.join('/');
    // Console the active route
    console.log('Active Route:', this.activeLink.snapshot.url);

    //   this.selectedItem = this.listItem.find(
    //     (item) => item.routeLink === activeRoute
    //   )?.itemName!;
  }
}
