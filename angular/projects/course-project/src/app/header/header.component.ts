import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
	@Output() currentPageChanged = new EventEmitter<{ pageName: string }>();

	setCurrentPage(pageName: string) {
		this.currentPageChanged.emit({pageName: pageName});
	}
}