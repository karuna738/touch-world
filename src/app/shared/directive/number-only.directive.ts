import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
  standalone: true
})
export class NumberOnlyDirective {
  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');
  }
}
