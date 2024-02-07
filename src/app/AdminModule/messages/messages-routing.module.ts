import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'groupchat',
        loadChildren: () =>
          import('./group-chat/group-chat.module').then(
            (m) => m.GroupChatModule
          ),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'messagesettings',
        loadChildren: () =>
          import('./message-settings/message-settings.module').then((m) => m.MessageSettingsModule),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'mobilesms',
        loadChildren: () =>
          import('./mobile-sms/mobile-sms.module').then((m) => m.MobileSMSModule),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'sms',
        loadChildren: () =>
          import('./sms/sms.module').then((m) => m.SmsModule),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MessagesRoutingModule { }
