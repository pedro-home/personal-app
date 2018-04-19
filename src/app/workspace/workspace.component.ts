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

	navbar: Model;
	page: Model;
	footer: Model;
	loader: Model;

	loaded: boolean;

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
			this.navbar = new Model(json['navbar']);
			this.page = new Model(json['page']);
			this.footer = new Model(json['footer']);

			this.loaded = true;
		});
	}

	private receiveAction($event) {
		
	}
}
