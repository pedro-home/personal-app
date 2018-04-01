import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseComponent, Model } from '../../base/base';
import { MessageService } from '../../message.service';
import { ComponentService } from '../../component.service';

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss'],
	providers: [MessageService, ComponentService]
})
export class SectionComponent extends BaseComponent implements OnInit {

	@ViewChild('componentContainer', { read: ViewContainerRef })
	private componentContainer: ViewContainerRef;

	constructor(private messageService: MessageService, private componentService: ComponentService) {
		super();
	}

	ngOnInit(): void {
		this.loadComponent();
	}

	private loadComponent(): void {
		this.messageService.processMessage('sections/'+this.model.data['message'])
		.subscribe(message => {
			this.componentService.createComponent(this.componentContainer, this.model.data['component'], new Model(message.json()));
		});
	}
}
