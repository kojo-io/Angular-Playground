import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {BaseService} from '../../../shared/base.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {strictEqual} from 'assert';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit, OnChanges {

  public changes: any;
  private form: FormGroup;

  @Output() newValue = new EventEmitter<any>();
  @Input() receivedValue: string;
  private console: Array<string> = [];
  public logger: string;
  constructor(
    private baseService: BaseService,
    private formBuilder: FormBuilder
  ) {
  }

  valueReturned() {
    this.newValue.emit(this.form.get('money').value);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      money: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.receivedValue.firstChange) {
      this.console.push(`Previous Value ${changes.receivedValue.previousValue}; Current Value ${changes.receivedValue.currentValue}`);
    }
  }
}
