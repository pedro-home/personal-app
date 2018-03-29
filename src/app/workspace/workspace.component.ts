import { Component, OnInit, AfterContentInit, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';

import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { LoaderComponent, Loader } from './loader/loader.component';
import { State } from './base/base';
import { MessageService } from './message.service';
import { MatIconRegistry } from '@angular/material';

@Component({
	selector: 'app-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss'],
	providers: [MessageService]
})

export class WorkspaceComponent implements OnInit, AfterContentInit {

	private header: Header;
	private footer: Footer;
	private loader: Loader;

	private loaded: boolean;

	constructor(private messageService: MessageService, private iconRegistry: MatIconRegistry) {
		this.loaded = false;

		// Font-awesome icon registry
		iconRegistry.setDefaultFontSetClass('fa');
		iconRegistry.registerFontClassAlias('far');
		iconRegistry.registerFontClassAlias('fas');
		iconRegistry.registerFontClassAlias('fab');
	}

	ngOnInit() {
		this.loader = new Loader(<JSON> { });
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
			this.header = new Header(json['header']);
			this.footer = new Footer(json['footer']);

			this.loaded = true;
		});
	}

	private receiveAction($event) {
		
	}
}
