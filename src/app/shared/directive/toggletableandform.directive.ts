import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appToggletableandform]'
})
export class ToggletableandformDirective {

 

  @Input() property! : string;
  istrue: boolean = false;
  constructor(private eleRef: ElementRef) {}
  ngOnInit(): void {}

  @HostListener('click') onclick() {
    let Element = this.eleRef.nativeElement as HTMLInputElement;
    console.log(Element);

    let m = Element.classList;
    if (Element.nextElementSibling?.className.includes('show')) {
      Element.nextElementSibling?.classList.remove('show');
      // this.istrue = ! this.istrue
    } else {
      Element.nextElementSibling?.classList.add('show');
      // this.istrue = ! this.istrue
    }
  }

}
