import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root',
})
export class ModalAndDataService implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  $editAndUpdateDataModal = new BehaviorSubject<any>('');
  $updateModal = this.$editAndUpdateDataModal.asObservable();

  filterDataEvent = new Subject<Event>();
  filterEventValue$ = this.filterDataEvent.asObservable();

  editUpdateModal(editdata: any, IsModalOpenRequired: any) {
    this.$editAndUpdateDataModal.next({ editdata, IsModalOpenRequired });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  subscribeToUpdateModal(callback: (data: any) => void): void {
    this.$updateModal.pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      callback(data);
    });
  }

  filterSearchText(searchText: any) {
    this.filterDataEvent.next(searchText);
  }
}
