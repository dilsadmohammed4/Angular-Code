import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedElement]',
})
export class RedElementDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
    // el.nativeElement.innerText = "Hello John! how are you "
  }
}
