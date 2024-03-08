import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ButtonComponent } from '../../core/modules/button/button.component';


@Component({
  selector: 'app-swiper-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './swiper-section.component.html',
  styleUrl: './swiper-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperSectionComponent {
auto: any;
}
