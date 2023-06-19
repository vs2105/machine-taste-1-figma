import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowhidedropdown]'
})
export class ShowhidedropdownDirective {

  constructor() { }

  @HostListener('click',['$event'])
  onclick(eve:Event){
  let ele1=eve.target as HTMLElement
  ele1.nextElementSibling?.classList.toggle('show')
  }

}
