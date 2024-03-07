import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-products-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-popup.component.html',
  styleUrl: './products-popup.component.scss'
})
export class ProductsPopupComponent {

  constructor(public popupService: PopupService) { }

  hidePopup() {
    const element = document.querySelector('.header');
    if (!(element && element.matches(':hover'))) {
      this.popupService.setShowPopup(false);
    }
  }
}