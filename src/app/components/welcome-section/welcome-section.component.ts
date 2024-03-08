import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/modules/button/button.component';

@Component({
  selector: 'app-welcome-section',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.scss'
})
export class WelcomeSectionComponent {

}
