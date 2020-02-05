import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CustomValidatorDirective} from './custom-validator.directive';

@Component({
  selector: 'app-simple-validators',
  templateUrl: './simple-validators.component.html',
  styleUrls: ['./simple-validators.component.css']
})
export class SimpleValidatorsComponent implements OnInit {

  private form: FormGroup;
  show: false;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', CustomValidatorDirective.emailValidator],
      password: ['', CustomValidatorDirective.passwordValidator]
    });
  }
}
