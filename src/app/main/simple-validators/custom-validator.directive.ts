import { Directive } from '@angular/core';
import {Form, FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}
  ]
})
export class CustomValidatorDirective implements Validator {

  constructor() { }

  static emailValidator(control: FormControl): ValidationErrors {
    if ( !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(control.value)) {
      return {
        isNotValidEmail: true
      };
    }
    return null;
  }

  static passwordValidator(control: FormControl): ValidationErrors {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(control.value)) {
      return {
        isNotPassword: true
      };
    }
  }

  validate(control: FormControl): ValidationErrors | null {
    return CustomValidatorDirective.emailValidator(control);
  }
}
