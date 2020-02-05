import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from '../main.service';
import {main} from '@angular/compiler-cli/src/main';

@Component({
  selector: 'app-receive-data',
  templateUrl: './receive-data.component.html',
  styleUrls: ['./receive-data.component.css']
})
export class ReceiveDataComponent implements OnInit {

  public receivedMessage: string;
  constructor(private mainService: MainService) {
    this.mainService.currentMessage.subscribe(
      message => {
        this.receivedMessage = message;
      });
    //
    // this.mainService.SendMessage(this.receivedMessage);
  }

  ngOnInit(): void {
  }
}
