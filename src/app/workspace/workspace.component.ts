import { Component, OnInit, AfterContentInit, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';

import { LoaderComponent } from './loader/loader.component';
import { State, Model } from './base/base';
import { MessageService } from './message.service';
import { MatIconRegistry } from '@angular/material';

@Component({
	selector: 'app-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss'],
	providers: [MessageService]
})

export class WorkspaceComponent implements AfterContentInit {

	private header: Model;
	private page: Model;
	private footer: Model;
	private loader: Model;

	private loaded: boolean;

	constructor(private messageService: MessageService, private iconRegistry: MatIconRegistry) {
		this.loaded = false;

		// Font-awesome icon registry
		iconRegistry.setDefaultFontSetClass('fa');
		iconRegistry.registerFontClassAlias('far');
		iconRegistry.registerFontClassAlias('fas');
		iconRegistry.registerFontClassAlias('fab');
	}

	ngAfterContentInit(): void {
		setTimeout(()=>{
			this.loadWorkspace();
		}, 0);
	}

	private loadWorkspace(): void
	{
		this.messageService.processMessage('workspace.json')
		.subscribe(message => {
			let json = message.json();
			this.header = new Model(json['header']);
			this.page = new Model(json['body']);
			this.footer = new Model(json['footer']);

			this.loaded = true;
		});
	}

	private receiveAction($event) {
		
	}
}
