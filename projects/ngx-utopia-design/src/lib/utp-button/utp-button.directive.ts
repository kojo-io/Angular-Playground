import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[utpButton]'
})
export class UtpButtonDirective {
  @Input() color: 'primary' | 'danger' | 'success' | 'black' | 'info' = 'primary';
  @Input() fontWeight: 'bold' | 'semi-bold' | 'normal' = 'semi-bold';
  @Input() rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' = 'none';
  @Input() block = false;
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() disabled = false;
  classValues = 'text-center cursor-pointer text-white hover:opacity-75';
  constructor() { }

  @HostBinding('class') get classes(): string {
    // button color
    if (this.color === 'success') {
      this.classValues = `${this.classValues} bg-green-600`;
    }
    if (this.color === 'primary') {
      this.classValues = `${this.classValues} bg-blue-600`;
    }
    if (this.color === 'info') {
      this.classValues = `${this.classValues} bg-blue-400`;
    }
    if (this.color === 'danger') {
      this.classValues = `${this.classValues} bg-danger-600`;
    }
    if (this.color === 'black') {
      this.classValues = `${this.classValues} bg-black`;
    }
    // rounded
    if (this.rounded === 'none') {
      this.classValues = `${this.classValues} rounded-none`;
    }
    if (this.rounded === 'lg') {
      this.classValues = `${this.classValues} rounded-lg`;
    }
    if (this.rounded === 'sm') {
      this.classValues = `${this.classValues} rounded-sm`;
    }
    if (this.rounded === 'md') {
      this.classValues = `${this.classValues} rounded-md`;
    }
    if (this.rounded === 'xl') {
      this.classValues = `${this.classValues} rounded-xl`;
    }
    if (this.rounded === '2xl') {
      this.classValues = `${this.classValues} rounded-2xl`;
    }
    if (this.rounded === '3xl') {
      this.classValues = `${this.classValues} rounded-3xl`;
    }
    if (this.rounded === 'full') {
      this.classValues = `${this.classValues} rounded-full`;
    }
    // width
    if (this.size === 'normal') {
      this.classValues = `${this.classValues} px-4 py-1.5`;
    }
    if (this.size === 'small') {
      this.classValues = `${this.classValues} px-2 py-0`;
    }
    if (this.size === 'large') {
      this.classValues = `${this.classValues} px-5 py-2`;
    }
    if (this.block) {
      this.classValues = `${this.classValues} w-full`;
    }
    if (this.disabled) {
      this.classValues = `${this.classValues} disabled:opacity-40`;
    }
    if (this.disabled) {
      this.classValues = `${this.classValues} disabled:cursor-not-allowed`;
    }
    if (this.fontWeight === 'semi-bold') {
      this.classValues = `${this.classValues} font-semibold`;
    }
    if (this.fontWeight === 'bold') {
      this.classValues = `${this.classValues} font-bold`;
    }
    if (this.fontWeight === 'normal') {
      this.classValues = `${this.classValues} font-normal`;
    }
    return this.classValues;
  }
}
