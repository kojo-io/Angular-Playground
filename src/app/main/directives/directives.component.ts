import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseService} from '../../shared/base.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public money: any;
  private form: FormGroup;
  constructor(
    private baseService: BaseService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      money: [null]
    });
  }

}
