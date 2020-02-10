import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ag-date',
  templateUrl: './ag-date.component.html',
  styleUrls: ['./ag-date.component.css']
})
export class AgDateComponent implements OnInit {
  @Input() colorMonthYear: string;
  @Input() colorDate: string;
  @Input() colorDay: string;
  @Input() fontSizeMonthYear: string;
  @Input() fontSizeDate: string;
  @Input() fontSizeDay: string;

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
  constructor() { }

  ngOnInit() {
    const localDate = new Date();
    this.Month = this.AllMonths[localDate.getMonth()];
    this.Day = this.AllDays[localDate.getDay()];
    this.Date = localDate.getDate();
    this.Year = localDate.getFullYear();
  }

}
