import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ag-calendar',
  templateUrl: './ag-calendar.component.html',
  styleUrls: ['./ag-calendar.component.css']
})
export class AgCalendarComponent implements OnInit, OnChanges {
  @Input() agDate: Date;
  @Input() useUTC = false;
  form: FormGroup;
  @Output() agDateChange;
  monthCount = 0;
  AllDays: string[] = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY'
  ];

  AllMonths: string[] = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER'
  ];

  Month: any;
  Day: any;
  Date: any;
  Year: any;

  AllDates: Array<any> = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.agDate = new Date();
    this.monthCount = this.agDate.getMonth();
    console.log(this.monthCount);
    this.GetDefaultCalendar();
    this.form = this.formBuilder.group({
      date: [null]
    });

    this.form.get('date').setValue(new Date());
    this.form.get('date').valueChanges.subscribe(value => {
      this.GetCalendar(value);
    });
  }

  GetCalendar(date) {
    this.agDate = new Date(date);
    if (this.useUTC) {
      this.AllDates = this.DaysInMonthUTC(this.agDate.getUTCFullYear(), this.agDate.getUTCMonth());
    } else {
      this.AllDates = this.DaysInMonth(this.agDate.getFullYear(), this.agDate.getMonth());
    }
  }

  GetDefaultCalendar() {
    if (this.useUTC) {
      this.AllDates = this.DaysInMonthUTC(this.agDate.getUTCFullYear(), this.agDate.getUTCMonth());
    } else {
      this.AllDates = this.DaysInMonth(this.agDate.getFullYear(), this.agDate.getMonth());
    }
  }

  private DaysInMonth(year, month): any {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  //
  // private DaysInMonth(year, month): any {
  //   const date = new Date(year, month, 1);
  //   let rowcount = 0;
  //   let days = [];
  //   const rowdays = [];
  //   while (date.getMonth() === month) {
  //     days.push(new Date(date));
  //     date.setDate(date.getDate() + 1);
  //     rowcount ++;
  //     if (rowcount === 7) {
  //       rowdays.push(days);
  //       rowcount = 0;
  //       days = [];
  //     }
  //   }
  //   if (days.length > 0) {
  //     rowdays.push(days);
  //   }
  //   console.log(rowdays);
  //   return rowdays;
  // }

   private DaysInMonthUTC(year, month): any {
    const date = new Date(Date.UTC(year, month, 1));
    const days = [];
    while (date.getUTCMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getUTCDate() + 1);
    }
    return days;
  }

  GetMonth(date: Date): any {
    return this.AllMonths[date.getMonth()];
  }

  GetMonthUTC(date: Date): any {
    return this.AllMonths[date.getUTCMonth()];
  }

  GetUTCDay(date: Date): any {
    return this.AllDays[date.getUTCDay()];
  }

  GetDay(date: Date): any {
    return this.AllDays[date.getDay()];
  }

  GetDate(date: Date): any {
    return date.getDate();
  }

  GetUTCDate(date: Date): any {
    return date.getUTCDate();
  }

  GetToday(date: Date): any {
    const today = new Date();
    if (today.toDateString() === date.toDateString()) {
      console.log(true);
      return 'background: \'blue\'';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.agDate.currentValue);
    // this.GetCalendar();
  }

  GetPreviousMonth() {
    this.monthCount --;
    if (this.monthCount === -1) {
      this.monthCount = 11;
      console.log(this.monthCount);
      this.agDate = new Date(this.agDate.getFullYear() - 1, 11, 1);
    } else {
      this.agDate.setMonth(this.agDate.getMonth() - 1);
    }
    this.GetDefaultCalendar();
  }

  GetNextMonth() {
    this.monthCount ++;
    if (this.monthCount === 12) {
      this.monthCount = 0;
      console.log(this.monthCount);
      this.agDate = new Date(this.agDate.getFullYear() + 1, 0, 1);
    } else {
      this.agDate.setMonth(this.agDate.getMonth() + 1);
    }
    this.GetDefaultCalendar();
  }
}
