import { Component } from '@angular/core';
import { ProductsPopupComponent } from '../products-popup/products-popup.component';
import { CommonModule } from '@angular/common';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductsPopupComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 text = 'Product';

 constructor(public popupService: PopupService) { }

  togglePopup() {
    this.popupService.setShowPopup(!this.popupService.showPopup);
  }

  hidePopup() {
    this.popupService.isMouseOverHeader.subscribe(isOver => {
      if (!isOver) {
        this.popupService.setShowPopup(false);
      }
    });
  }
  
}
