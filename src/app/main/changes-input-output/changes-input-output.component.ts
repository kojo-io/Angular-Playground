import { Component, OnInit } from '@angular/core';
import {BaseService} from '../../shared/base.service';

@Component({
  selector: 'app-changes-input-output',
  templateUrl: './changes-input-output.component.html',
  styleUrls: ['./changes-input-output.component.css']
})
export class ChangesInputOutputComponent implements OnInit {

  public money: string;
  constructor(
    private baseService: BaseService
  ) {
  }

  ngOnInit() {
  }

  getData(event) {
    this.money = event;
  }
}
