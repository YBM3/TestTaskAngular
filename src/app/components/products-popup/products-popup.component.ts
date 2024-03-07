import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-popup.component.html',
  styleUrl: './products-popup.component.scss'
})
export class ProductsPopupComponent {
  @Input() showPopup!: boolean;
}
