import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

// A hero's name can't match the given regular expression
export function allowNumbersValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const allowNumbers = nameRe.test(control.value);
    return !allowNumbers ? {'allowNumbers': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appAllowNumbers]',
  providers: [{provide: NG_VALIDATORS, useExisting: AllowNumbersValidatorDirective, multi: true}]
})
export class AllowNumbersValidatorDirective implements Validator {
  @Input() appAllowNumbers: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.appAllowNumbers ?
      allowNumbersValidator(new RegExp(this.appAllowNumbers, 'i'))(control) :
      null;
  }
}

