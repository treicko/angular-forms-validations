import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function allowWordsValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const allowWords = nameRe.test(control.value);
    return !allowWords ? {'allowWords': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appAllowWords]',
  providers: [{provide: NG_VALIDATORS, useExisting: AllowWordsValidatorDirective, multi: true}]
})
export class AllowWordsValidatorDirective implements Validator {
  @Input() appAllowWords: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.appAllowWords ?
    allowWordsValidator(new RegExp(this.appAllowWords, 'i'))(control) :
      null;
  }
}

