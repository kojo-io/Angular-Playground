import { Component, OnInit } from '@angular/core';
import {BaseService} from '../shared/base.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private baseService: BaseService,
              private route: Router) { }

  ngOnInit() {
    this.baseService.setSessionData(false);
  }

  login() {
    this.baseService.setSessionData(true);
    this.route.navigate(['/main/directives']);
  }
}
