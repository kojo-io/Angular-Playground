import {Component, ContentChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngcontent-test',
  templateUrl: './ngcontent-test.component.html',
  styleUrls: ['./ngcontent-test.component.css']
})
export class NgcontentTestComponent implements OnInit {

  count: Array<any> = [1, 2, 3];
  constructor() { }

  ngOnInit() {
  }

}
