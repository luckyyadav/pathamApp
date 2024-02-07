import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

const TAG = 'HostelsComponent Component';

@Component({
  selector: 'app-hostels',
  templateUrl: './hostelsComponent.component.html',
  styleUrls: ['./hostelsComponent.component.scss'],
})
export class HostelsComponent implements OnInit, AfterViewInit {
  hostelDataSource = new MatTableDataSource<any>();
  hostelList: any[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private webServices: WebService, private constant: Constant) {}

  ngAfterViewInit() {
    this.hostelDataSource.sort = this.sort;
    this.hostelDataSource.paginator = this.paginator;
  }

  columns: string[] = [
    'id',
    'hostelTitle',
    'hostel_resident_type',
    'hostelType',
    'building.0.building_title',
    'building.0.building_floor',
    'hostel_location',
    'hostelManager',
  ];

  headers: string[] = [
    'ID',
    'Hostel Title',
    'Resident Type',
    'Hostel Type',
    'Building Title',
    'Building Floor',
    'Location',
    'Manager',
  ];

  getNestedValue(obj: any, propertyPath: string): any {
    const properties = propertyPath.split('.');
    return properties.reduce(
      (value, prop) => (value ? value[prop] : null),
      obj
    );
  }

  ngOnInit(): void {
    this.hostelDataSource.data = this.hostelList;
    this.hostelDataSource.sort = this.sort;
    this.getAllHostelComp();
  }

  getAllHostelComp() {
    this.webServices
      .getMethod(this.constant.Hostel.getHostelCompsList)
      .subscribe((res) => {
        this.hostelDataSource.data = res.data.hostelList;
        this.hostelList = res.data.hostelList;
        console.log(TAG, 'Hotel List', res.data.hostelList);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.hostelDataSource.filter = filterValue.trim().toLowerCase();

    if (this.hostelDataSource.paginator) {
      this.hostelDataSource.paginator.firstPage();
    }
  }
}
