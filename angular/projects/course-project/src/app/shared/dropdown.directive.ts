import { Directive, Input, HostListener, HostBinding } from '@angular/core';


@Directive({
	selector: '[appDropDown]'
})
export class DropdownDirective {
	@HostBinding('class.open') isOpen: boolean = false;

	@HostListener('click') toggleOpen(eventData: Event) {
		this.isOpen = !this.isOpen;
    }
}