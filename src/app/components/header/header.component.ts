import { Component } from '@angular/core';
import { ProductsPopupComponent } from '../products-popup/products-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductsPopupComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 text = 'Product';

 showPopup = true;

 togglePopup() {
  this.showPopup = !this.showPopup;
  console.log('togglePopup called, showPopup is now', this.showPopup);
}

}
