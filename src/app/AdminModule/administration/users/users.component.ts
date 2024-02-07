import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  AllUsersList: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  dataColumns = [
    {
      columnDef: 'fullName',
      header: 'Name',
    },
    { columnDef: 'username', header: 'UserName' },
    {
      columnDef: 'email',
      header: 'Email',
    },
    {
      columnDef: 'last_login',
      header: 'Last Login',
    },
    {
      columnDef: 'customPermissionsType',
      header: 'Permission',
    },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },

    {
      tableCols: [
        'fullName',
        'username',
        'email',
        'last_login',
        'customPermissionsType',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.Administration.getAllUsers)
      .subscribe((res) => {
        this.AllUsersList = res.administrator;
        this.webServices.hideLoader();
        console.log(res);
      });
  }
}
