import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  public menuItems: any[];
  selectedMenu: any;
  constructor() { }

  public mainMenu: Array<any> = [
    {
      path: '/main/directives',
      title: 'Directives'
    },
    {
      path: '/main/changes-input-output',
      title: 'OnChanges @Input @Output'
    },
    {
      path: '/main/pass-data',
      title: 'Pass Data (with element fade in animation)'
    },
    {
      path: '/main/receive-data',
      title: 'Receive Data'
    },
    {
      path: '/main/ngcontent-test',
      title: 'NgContent'
    },
    {
      path: '/main/simple-validators',
      title: 'Simple Validators'
    },
    {
      path: '/main/timers',
      title: 'Timers'
    },
    {
      path: '/main/cropper',
      title: 'Cropper'
    },
    {
      path: '/login',
      title: 'Log Out (Route Guard)'
    }
  ];

  ngOnInit() {
  }

}
