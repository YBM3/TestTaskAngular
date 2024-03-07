import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private _showPopup = new BehaviorSubject<boolean>(false);
  private _isMouseOverHeader = new BehaviorSubject<boolean>(false);

  showPopup$ = this._showPopup.asObservable();

  get showPopup(): boolean {
    return this._showPopup.getValue();
  }

  setShowPopup(value: boolean) {
    this._showPopup.next(value);
  }

  setIsMouseOverHeader(isOver: boolean) {
    this._isMouseOverHeader.next(isOver);
  }

  get isMouseOverHeader() {
    return this._isMouseOverHeader.asObservable();
  }
}