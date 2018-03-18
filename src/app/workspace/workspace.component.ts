import { Component, OnInit, AfterContentInit, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';

import { WorkspaceService } from './workspace.service';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import { LoaderComponent, Loader } from './loader/loader.component';
import { Page, PageComponent } from './page/page.component';
import { State } from './base/base';

@Component({
	selector: 'app-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss'],
	providers: [WorkspaceService]
})

export class WorkspaceComponent implements OnInit, AfterContentInit {

	private header: Header;
	private footer: Footer;
	private loader: Loader;
	private page: Page;

	private loaded: Object;

	constructor(private workspaceService: WorkspaceService) {
		this.loaded = { workpsace: false, page: false };
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
		this.workspaceService.message.processMessage('workspace.json')
		.subscribe(message => {
			let json = message.json();
			this.header = new Header(json['header']);
			this.footer = new Footer(json['footer']);

			this.loaded['workspace'] = true;
		});

		this.loadPage();
	}

	private loadPage(): void {

		this.workspaceService.message.processMessage(`page/page.html`)
		.subscribe(message => {
			let json = <JSON> {};
			json['template'] = message.text();

			this.page = new Page(json);

			this.loaded['page'] = true;
		});
	}

	private receiveAction($event) {
		
	}
}
