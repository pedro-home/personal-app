import { Component, OnInit } from '@angular/core';
import { BaseComponent, Model } from '../../base/base';
import { MessageService } from '../../message.service';

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss'],
	providers: [MessageService]
})
export class SectionComponent extends BaseComponent implements OnInit {

	private data: Model;

	constructor(private messageService: MessageService) {
		super();
	}

	ngOnInit(): void {
		this.loadComponent();
	}

	private loadComponent(): void {
		this.messageService.processMessage('sections/'+this.model.data['message'])
		.subscribe(message => {
			this.data = new Model(message.json());
		});
	}
}
