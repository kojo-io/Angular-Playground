import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MainService} from '../main.service';

@Component({
  selector: 'app-pass-data',
  templateUrl: './pass-data.component.html',
  styleUrls: ['./pass-data.component.css']
})
export class PassDataComponent implements OnInit {

  form: FormGroup;
  private receivedMessage: string;
  constructor(private formBuilder: FormBuilder,
              private mainService: MainService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      input: [null]
    });
  }

  send() {
    this.mainService.SendMessage(this.form.get('input').value);
    this.form.reset();
    alert('data passed sent');
  }
}
