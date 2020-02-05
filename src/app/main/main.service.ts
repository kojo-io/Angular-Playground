import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  private messageSource = new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable();

  SendMessage(message): void {
    this.messageSource.next(message);
  }
}
