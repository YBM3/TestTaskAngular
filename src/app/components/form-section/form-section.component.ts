import { Component } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { InputComponent } from '../input/input.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [SelectComponent, InputComponent, CheckboxComponent, ButtonComponent],
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss'
})
export class FormSectionComponent {

}
