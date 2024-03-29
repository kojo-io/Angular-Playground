
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import getWeek from 'date-fns/getWeek';
export interface Week {
  date: Date[];
  week: number;
}

@Component({
  selector: 'app-ag-calendar',
  templateUrl: './ag-calendar.component.html',
  styleUrls: ['./ag-calendar.component.css'],
})
export class AgCalendarComponent implements OnInit, OnChanges {
  @Input() agDate: Date;
  monthYear: any;
  @Input() useUTC = false;
  form: FormGroup;
  allowPastDates = true;
  @Output() agDateChange = new EventEmitter<Date>();
  monthCount = 0;
  weeks: Array<any> = [];
  entireYear: Array<any> = [];
  AllDays: any[] = [
    {
      id: 0,
      day: 'SUN'
    },
    {
      id: 1,
      day: 'MON'
    },
    {
      id: 2,
      day: 'TUES'
    },
    {
      id: 3,
      day: 'WED'
    },
    {
      id: 4,
      day: 'THURS'
    },
    {
      id: 5,
      day: 'FRI'
    },
    {
      id: 6,
      day: 'SAT'
    }
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
    'DECEMBER',
  ];

  AllDates: Array<any> = [];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      date: [null],
    });
    this.agDate = new Date();
    this.monthCount = this.agDate.getMonth();
    console.log(this.monthCount);
    this.GetDefaultCalendar();
    //
    // this.form.get('date').setValue(new Date());
    // this.form.get('date').valueChanges.subscribe((value) => {
    //   this.GetCalendar(value);
    // });
  }

  GetCalendar(date) {
    this.agDate = new Date(date);
    if (this.useUTC) {
      this.AllDates = this.DaysInMonthUTC(
        this.agDate.getUTCFullYear(),
        this.agDate.getUTCMonth()
      );
    } else {
      this.AllDates = this.DaysInMonth(
        this.agDate.getFullYear(),
        this.agDate.getMonth()
      );
    }
  }

  GetDefaultCalendar() {
    if (this.useUTC) {
      this.AllDates = this.DaysInMonthUTC(
        this.agDate.getUTCFullYear(),
        this.agDate.getUTCMonth()
      );
    } else {
      this.AllDates = this.DaysInMonth(
        this.agDate.getFullYear(),
        this.agDate.getMonth()
      );
      // this.AllMonths.forEach((month) => {
      //   const m = this.AllMonths.findIndex(u => u === month);
      //   console.log(m, month);
      //
      //
      //   this.GetWeeks(this.AllDates);
      //   this.entireYear.push(this.weeks);
      //   console.log(this.weeks);
      //   console.log(this.entireYear);
      // });
    }

    this.GetWeeks(this.AllDates);
  }

  GetWeeks(dates) {
    this.weeks = [];
    console.log(dates);
    dates.forEach((elements) => {
      // this.AllDates.f
      const week = getWeek(elements);
      console.log(week);
      const getdayWeek = this.weeks.find((u) => u.week === week);
      if (getdayWeek === undefined) {
        // if(this.GetDay(element) ===)
        this.weeks.push({
          week,
          dates: [elements],
        });

        console.log(this.weeks);
      } else {
        getdayWeek.dates.push(elements);
      }
    });

    const nMRT = this.weeks[0].dates;
    const n = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < nMRT.length; i++) {
      console.log('day', nMRT[i].getDay());
      if (nMRT[i].getDay() > 0) {
        const newArray = new Array(nMRT[i].getDay());
        // tslint:disable-next-line: prefer-for-of
        for (let x = 0; x < newArray.length; x++) {
          n.push(null);
        }
        console.log('nn', n);
        nMRT.forEach((ele) => {
          n.push(ele);
        });
        this.weeks[0].dates = n;
        break;
      } else {
        break;
      }
    }
  }

  private DaysInMonth(year, month): any {
    const date = new Date(year, month, 1);
    this.monthYear = `${this.GetMonth(date)} ${year}`;
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  private DaysInMonthUTC(year, month): any {
    const date = new Date(Date.UTC(year, month, 1));
    this.monthYear = `${this.GetMonth(date)} ${year}`;
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

  GetDay(index: any): any {
    return this.AllDays.find(u => u.id === index).day;
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
    this.monthCount--;
    if (this.monthCount === -1) {
      this.monthCount = 11;
      this.agDate = new Date(this.agDate.getFullYear() - 1, 11, 1);
    } else {
      this.agDate.setMonth(this.agDate.getMonth() - 1);
    }
    this.GetDefaultCalendar();
  }

  GetNextMonth() {
    this.monthCount++;
    if (this.monthCount === 12) {
      this.monthCount = 0;
      console.log(this.monthCount);
      this.agDate = new Date(this.agDate.getFullYear() + 1, 0, 1);
    } else {
      this.agDate.setMonth(this.agDate.getMonth() + 1);
    }
    this.GetDefaultCalendar();
  }

  onCalendarChange(date, index: Element) {
    if (this.allowPastDates === true) {
      const allEle = document.getElementsByClassName('datec');
      for (let i = 0; i < allEle.length; i++) {
          allEle.item(i).classList.remove('selected');
        }
      index.classList.add('selected');
      this.agDateChange.emit(date);
    } else {
      const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
      if (date >= today) {
        const allEle = document.getElementsByClassName('datec');
        for (let i = 0; i < allEle.length; i++) {
          allEle.item(i).classList.remove('selected');
        }
        index.classList.add('selected');
        this.agDateChange.emit(date);
      }
    }
  }
}
