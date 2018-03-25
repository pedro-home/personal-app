import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { BaseItem, BaseComponent } from '../base/base';
import { MessageService } from '../message.service';
import { ComponentService } from '../component.service';
import { Formula } from './formula/formula.component';

@Component({
	selector: 'app-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss'],
	providers: [MessageService, ComponentService]
})
export class PageComponent implements OnInit {

	/*
	@ViewChild('sectionContainer', { read: ViewContainerRef })
	private sectionContainer: ViewContainerRef;
	*/

	private formula: Formula;

	constructor(private messageService: MessageService, private componentService: ComponentService) {

	}

	ngOnInit(): void {
		this.loadSections();
	}

	public loadSections(): void {
		this.messageService.processMessage('sections/formula.json')
		.subscribe(message => {
			this.formula = new Formula(message.json());

			/*
			this.messageService.processMessage('sections/formula/formula.html')
			.subscribe(message => {
				let componentData = { selector: 'app-section', template: message.text() };
				this.componentService.loadComponent(this.sectionContainer, componentData, new Formula(json));
			});
			*/
		});

		/*
		this.messageService.processMessage('sections/about/about.html')
		.subscribe(message => {
			let componentData = { selector: 'app-section', template: message.text() };
			this.componentService.loadComponent(this.sectionContainer, componentData);
		});
		*/
	}
}