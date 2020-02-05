import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  constructor(
    private route: Router,
    private baseService: BaseService
  ) {
  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      if (this.baseService.getSesstionData() !== false) {
        resolve(true);
      } else {
        resolve(false);
        this.route.navigate(['/']);
      }
    });
  }
}
