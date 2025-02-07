import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRequiredField]',
})
export class RequiredFieldDirective {
  @Input('appRequiredField') fieldName: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.fieldName) {
      const errorMessage = `${this.fieldName} is required`;
      this.renderer.setProperty(
        this.el.nativeElement,
        'textContent',
        errorMessage
      );
    }
  }
}
