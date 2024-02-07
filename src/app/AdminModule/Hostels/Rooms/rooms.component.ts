import { Component } from '@angular/core';

import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

const TAG = 'Hostel Rooms Component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  constructor(private webServices: WebService, private constant: Constant) {}

  roomsList: any;

  dataColumns = [
    { columnDef: 'sl', header: 'SI.' },
    { columnDef: 'room_number', header: 'Room Number' },
    { columnDef: 'description', header: 'Description' },
    { columnDef: 'hostelTitle', header: 'Hostel Name' },
    { columnDef: 'floor_no', header: 'Floor' },
    { columnDef: 'building_title', header: 'Building' },
    { columnDef: 'room_wing', header: 'Wing' },

    {
      tableCols: [
        'sl',
        'room_number',
        'description',
        'hostelTitle',
        'floor_no',
        'building_title',
        'room_wing',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllRooms();
  }

  getAllRooms() {
    this.webServices
      .getMethod(this.constant.Hostel.getRoomsList)
      .subscribe((res) => {
        this.roomsList = res.data.roomList;
        console.log(TAG, 'Rooms List', res.data.roomList);
      });
  }
}
