import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicBase } from './dynamic-base';

@Component({
  selector: 'app-df-base',
  templateUrl: './dynamic-form-base.component.html'
})
export class DynamicFormBaseComponent {
  @Input() question: DynamicBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
