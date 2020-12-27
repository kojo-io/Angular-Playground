import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timer: any;
  timer2: any;
  timer3: any;
  start = new Date('2020-09-15T10:02:00');
  currentMinute: any;
  currentSecond: any;
  timerInterval: any;
  duration: any;
  endState = 'you have less than 1 minute remaining';
  constructor() { }

  ngOnInit(): void {
    this.timerInterval = setInterval(() => {
      this.timer = this.timeDiffCalc(new Date('2020/8/17 07:58:00'), new Date());
      this.timer2 = this.fancyTimeFormat(new Date('2020-09-14T09:35:00'), new Date());
      this.timer3 = this.TimerFormat(this.start.getTime(), new Date());
    }, 1000);
  }

  timeDiffCalc(dateFuture, dateNow) {
    console.log(dateNow, dateFuture);
    let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;


    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log('calculated days', days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log('calculated hours', hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log('minutes', minutes);

    let myseconds = Math.abs(dateFuture - dateNow) / 1000;
    const seconds = Math.floor( myseconds / 60);
    myseconds -= seconds * 60;
    console.log('minutes', seconds);

    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

    difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`;

    return difference;
  }

  fancyTimeFormat(dateFuture, dateNow) {
    const duration = Math.abs(dateFuture - dateNow) / 1000;
    // Hours, minutes and seconds
    const hrs = Math.floor(duration / 3600);
    const mins = Math.floor((duration % 3600) / 60);
    const secs = Math.floor(duration % 60);
    this.currentMinute = mins;
    this.currentSecond = secs;
    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = '';

    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }

    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    this.duration = Math.round((duration));
    if (this.duration === 0) {
      this.endState = 'Call Ended';
      clearInterval(this.timerInterval);
    }
    return ret;
  }

  TimerFormat(start, dateNow) {
    const newT = new Date().getTime();
    const duration = Math.abs(start - newT) / 1000;
    // Hours, minutes and seconds
    const hrs = Math.floor(duration / 3600);
    const mins = Math.floor((duration % 3600) / 60);
    const secs = Math.floor(duration % 60);

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = '';
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
  }

  compareDateAgainstToday() {
    if (this.start > new Date()) {
      return ('Start > Today');
    } else if (this.start < new Date()) {
      return ('Today > Start');
    } else {
      return ('Start = Today');
    }
  }
}
