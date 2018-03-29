import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { BaseItem, BaseComponent } from '../base/base';
import { MessageService } from '../message.service';
import { Formula } from './formula/formula.component';
import { Contacts } from './contacts/contacts.component';

@Component({
	selector: 'app-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss'],
	providers: [MessageService]
})
export class PageComponent implements OnInit {

	private formula: Formula;
	private contacts: Contacts;

	constructor(private messageService: MessageService) {

	}

	ngOnInit(): void {
		this.loadSections();
	}

	public loadSections(): void {
		this.messageService.processMessage('sections/formula.json')
		.subscribe(message => {
			this.formula = new Formula(message.json());
		});

		this.messageService.processMessage('sections/contacts.json')
		.subscribe(message => {
			this.contacts = new Contacts(message.json());
		});
	}
}