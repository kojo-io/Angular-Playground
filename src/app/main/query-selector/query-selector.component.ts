import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-query-selector',
  templateUrl: './query-selector.component.html',
  styleUrls: ['./query-selector.component.css']
})
export class QuerySelectorComponent implements OnInit, OnChanges {
  form: FormGroup;
  @Input() queryCreator: any;
  @Input() fieldobj: any;
  changesContainer: Array<any> = [];
  constructor(private formBuilder: FormBuilder) { }
  isEnabled = false;

  schema: string[] = [
    'inventory',
    'config'
  ];

  table: string[] = [
    'stock',
    'invent'
  ];

  field: string[] = [
    'stocklevel',
    'inventlevel'
  ];

  ngOnInit() {
    this.form = this.formBuilder.group({
      schema: null,
      table: null,
      field: null,
      comparator: [null]
    });
    this.form.get('comparator').disable({onlySelf: true});

    this.form.get('comparator').valueChanges.subscribe(value => {
      this.operator(value);
      this.form.get('comparator').disable({onlySelf: true});
    });
  }

  standard() {
    const data = this.form.value;
    if (this.queryCreator === null) {
      this.queryCreator = `{{${data.schema}.${data.table}.${this.field}}}`;
    } else {
      this.queryCreator = `${this.queryCreator} {{${data.schema}.${data.table}.${data.field}}}`;
    }
  }

  operator(comparator) {
    this.queryCreator = `${this.queryCreator} {{${comparator}}}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesContainer.push(changes.queryCreator);
    if (changes.fieldobj) {
      this.standard();
      this.form.get('comparator').disable({onlySelf: false});
    }
  }
}
