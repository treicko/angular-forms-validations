import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { allowNumbersValidator } from './../shared/allow-numbers.directive';
import { allowWordsValidator } from './../shared/allow-words.directive';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';

import { DynamicBase } from './dynamic-base';

@Injectable()
export class DynamicControlService {
  constructor() { }

  toFormGroup(dynamics: DynamicBase<any>[] ) {
    const group: any = {};

    dynamics.forEach(dynamic => {
      group[dynamic.key] = new FormControl(dynamic.value || '', this.getValidators(dynamic));
    });
    return new FormGroup(group);
  }

  getValidators(dynamic) {
    const validators = <any>[];
    if (dynamic.required) {
      validators. push(Validators.required);
    }
    if (!!dynamic.forbiddenName) {
      validators. push(forbiddenNameValidator(new RegExp(dynamic.forbiddenName, 'i')));
    }
    if (!!dynamic.allowNumbers) {
      console.log('regex: ', dynamic.allowNumbers);
      validators.push(allowNumbersValidator(new RegExp(`(${dynamic.allowNumbers})`, 'i')));
    }
    if (!!dynamic.allowWords) {
      validators.push(allowWordsValidator(new RegExp(`(\W|^)(${dynamic.allowWords})(\W|$)`, 'i')));
    }
    return validators;
  }
}
