import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormSectionComponent } from './components/form-section/form-section.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { SwiperSectionComponent } from './components/swiper-section/swiper-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FormSectionComponent,
    WelcomeSectionComponent,
    SwiperSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'TestTask';
}
