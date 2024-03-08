import { Component } from '@angular/core';
import { SelectComponent } from '../../core/modules/select/select.component';
import { InputComponent } from '../../core/modules/input/input.component';
import { CheckboxComponent } from '../../core/modules/checkbox/checkbox.component';
import { ButtonComponent } from '../../core/modules/button/button.component';

@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [SelectComponent, InputComponent, CheckboxComponent, ButtonComponent],
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss'
})
export class FormSectionComponent {

}
