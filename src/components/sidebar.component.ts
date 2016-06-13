import { Component, Input, Output, ElementRef, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { Sidebar } from 'bootstrap-layout';
import { ScrollableDirective } from '../directives/scrollable.directive';

@Component({
	selector: 'ng2-bl-sidebar',
	template: `
		<div class="sidebar" [id]="id" 
			[ngClass]="sidebarClass" 
			[attr.data-position]="position"
			ng2-bl-scrollable>
			<ng-content></ng-content>
		</div>
	`,
	directives: [
		ScrollableDirective
	]
})

export class SidebarComponent implements AfterViewInit, OnDestroy {
	@Input('sidebar-id') id: String;
	@Input('sidebar-class') sidebarClass: String = 'sidebar-dark bg-primary';
	@Input('sidebar-position') position: String = 'left';
	@Input('onToggle') onToggle: EventEmitter<boolean>;
	@Input('isActive') isActive: boolean = true;

	constructor(private elementRef: ElementRef, private sidebar: Sidebar) {}

	get selector(): string {
		return this.elementRef.nativeElement.querySelector('.sidebar');
	}

	ngAfterViewInit(): void {
		this.sidebar.init(this.selector);

		if (this.onToggle) this.onToggle.subscribe((show: boolean) => this.toggle(show));
		if (!this.isActive) this.sidebar.hide(this.selector);
	}

	ngOnDestroy(): void {
		this.sidebar.destroy(this.selector);

		if (this.onToggle) this.onToggle.unsubscribe();
	}

	toggle(show: boolean) {
		show ? this.sidebar.show(this.selector) : this.sidebar.hide(this.selector);
	}
}
