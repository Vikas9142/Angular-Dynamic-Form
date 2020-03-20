import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el : ElementRef, private renderer : Renderer2) { }

  @HostListener('click') onClick() {
    console.log(this.el)
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #ccdd45')
  }
}