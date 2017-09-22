import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicBase } from './dynamic-base';
import { DynamicControlService } from './dynamic-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ DynamicControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: DynamicBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: DynamicControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}

