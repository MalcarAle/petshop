import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[mask]',
})
export class MaskDirective {
  @Input('mask') mask!: string; //toda vez que for usado o mask no html, o valor de mask será jogada para esta variavel

  constructor(private element: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: {
    inputType: string;
    stopPropagation: () => void;
  }) {
    if (event.inputType == 'deleteContentBackward') return;

    const initialValue = this.element.nativeElement.value;
    initialValue.replace(/[^0-9]*/g, '');
    if (initialValue !== this.element.nativeElement.value) {
      event.stopPropagation();
    }

    this.element.nativeElement.value = this.format(this.mask, initialValue);
  }
  format(mask: string, value: any): string {
    let text = '';
    let data = value;
    let c, m, i, x;

    for (i = 0, x = 1; x && i < mask.length; ++i) {
      c = data.charAt(i);
      m = mask.charAt(i);

      switch (mask.charAt(i)) {
        case '#':
          if (/\d/.test(c)) {
            text += c;
          } else {
            x = 0;
          }
          break;

        case 'A':
          if (/[a-z]/.test(c)) {
            text += c;
          } else {
            x = 0;
          }
          break;
        case 'N':
          if (/[a-z0-9]/.test(c)) {
            text += c;
          } else {
            x = 0;
          }
          break;
        case 'X':
          text += c;
          break;

        default:
          text += m;
          break;
      }
    }
    return text;
  }
}
