import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalAndDataService {
  $editAndUpdateDataModal = new BehaviorSubject<any>('');
  $updateModal = this.$editAndUpdateDataModal.asObservable();

  editUpdateModal(editdata: any) {
    this.$editAndUpdateDataModal.next(editdata);
  }
}
