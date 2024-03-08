import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';


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