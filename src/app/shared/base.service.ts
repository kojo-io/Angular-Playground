import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  setSessionData(data: any): void {
    localStorage.setItem('wlhubsession', JSON.stringify(data));
  }

  getSesstionData(): any {
    if (localStorage.getItem('wlhubsession')) {
      return JSON.parse(localStorage.getItem('wlhubsession'));
    }
    return false;
  }
}
