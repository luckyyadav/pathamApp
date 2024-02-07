import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ModalAndDataService } from '../../../../services/modal-ServiceAndData-Service/modalData.service';

const ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-mat-tablelist',
  templateUrl: './mat-tablelist.component.html',
  styleUrls: ['./mat-tablelist.component.scss'],
})
export class MatTablelistComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() AllTableData: any[];
  @Input() dataColumns: any = [];
  @Input() componentDetails?: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  columns: any = [];
  /* Toggle Button config */
  color = 'green';
  checked: boolean = false;
  disabled = false;

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private modalDataService: ModalAndDataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dataSource.data = [...this.AllTableData].reverse();
    this.displayedColumns = this.dataColumns.find((ele: any) => {
      return ele.tableCols;
    }).tableCols;
    console.log(this.displayedColumns);
    this.columns = this.dataColumns;

    this.modalDataService.filterEventValue$.subscribe((keyupEvent: Event) => {
      this.applyFilter(keyupEvent);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editData(data: any) {
    this.modalDataService.editUpdateModal(data, true);
    console.log(data);
  }

  /* Toggle Status */

  toggleStatus(data: any) {
    console.log(data, this.checked);
    this.modalDataService.editUpdateModal(data, false);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('detect chnages', changes);
    if (changes['AllTableData']) {
      this.dataSource.data = [
        ...changes['AllTableData'].currentValue,
      ].reverse();
    }
  }

  pageChangeEvent(ev: any) {
    console.log(ev);
  }
}
