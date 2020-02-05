import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[appCurrencyInput]'
})
export class CurrencyInputDirective implements OnChanges {
  // input for currency symbol
  @Input() symbol: string;
  // input for currency separator
  @Input() separator: string;
  // input for number of decimal places
  @Input() decimalPlaces: number;

  private value;
  private regex;

  constructor(private el: ElementRef, private control: NgControl) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.decimalPlaces) {
      if (!changes.decimalPlaces.currentValue) {
        this.decimalPlaces = 0;
      }
    }

    // generate regular expression based on @inputs
    this.regex = new RegExp(`^[${this.symbol}]?\\d*[0-9${this.separator}?\\d{0,3}]*[.]?\\d{0,${this.decimalPlaces}}$`);

    this.parseCurrency();
  }

  // listen to key up event
  @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent) {

    // apply regular expression rule
    this.setInputFilter(this.el.nativeElement, (value) => {
      return this.regex.test(value);
    });
    this.parseCurrency();
  }

  // Currency Input Control format
  private parseCurrency() {
    // format input control
    const element = this.el.nativeElement.value;
    // split value if it contains decimal point
    const newStr = element.toString().split('.');

    // regular expression for replacing @input separator with empty string
    const nRegex = new RegExp(`${this.separator}`, 'g');

    // apply separator regular expression rule
    newStr[0] = newStr[0].replace(nRegex, '').replace(/\B(?=(\d{3})+(?!\d))/g, this.separator);

    // join splitted values
    this.value = newStr.join('.');

    // set the value of input control
    this.control.control.setValue(this.value);
  }

  // Regular expression for checking key event
  setInputFilter(input, inputFilter) {
    ['keyup', 'keydown', 'input', 'changes'].forEach((event) => {
      input.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty('oldValue')) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = '';
        }
      });
    });
  }
}
