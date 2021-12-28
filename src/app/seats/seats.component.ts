import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.svg',
  styleUrls: ['./seats.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeatsComponent),
      multi: true,
    },
  ],
})
export class SeatsComponent implements ControlValueAccessor {
  public onTouched = () => {};
  public onChange = (value: string) => {};
  public touched: boolean = false;
  public isDisabled: boolean = false;
  public value: string = '';

  public select(option: string): void {
    if (!this.isDisabled) {
      if (this.isSelected(option)) {
        this.value = '';
      } else {
        this.value = option;
      }
      this.onChange(this.value);
      this.markAsTouched();
    }
  }

  public isSelected(option: string): boolean {
    return option === this.value;
  }

  writeValue(value: string): void {
    this.value = value;
  }
  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
