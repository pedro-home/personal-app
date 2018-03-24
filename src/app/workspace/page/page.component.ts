import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { BaseItem } from '../base/base';
import { MessageService } from '../message.service';
import { ComponentService } from '../component.service';

@Component({
	selector: 'app-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss'],
	providers: [MessageService, ComponentService]
})
export class PageComponent implements OnInit {

	@ViewChild('sectionContainer', { read: ViewContainerRef })
	private sectionContainer: ViewContainerRef;

	constructor(private messageService: MessageService, private componentService: ComponentService) {

	}

	ngOnInit(): void {
		this.loadSections();
	}

	public loadSections(): void {
		this.messageService.processMessage('sections/formula.html')
		.subscribe(message => {
			let componentData = { selector: 'app-section',template: message.text() };
			let sectionComponent = this.componentService.loadComponent(this.sectionContainer, componentData);
		});
	}
}