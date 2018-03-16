import { Component, OnInit, AfterContentInit } from '@angular/core';

import { WorkspaceService } from './workspace.service';
import { WorkspaceHeader } from './workspace-header/workspace-header.component';
import { WorkspaceFooter } from './workspace-footer/workspace-footer.component';
import { WorkspaceDialog } from './workspace-dialog/workspace-dialog.component';
import { WorkspaceLoaderComponent, WorkspaceLoader } from './workspace-loader/workspace-loader.component';
import { WorkspacePage } from './workspace-page/workspace-page.component';
import { State } from './base/base.component';

@Component({
	selector: 'app-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss'],
	providers: [WorkspaceService]
})

export class WorkspaceComponent implements OnInit, AfterContentInit {

	private header: WorkspaceHeader;
	private footer: WorkspaceFooter;
	private loader: WorkspaceLoader;
	private currentPage: WorkspacePage;
	private loadedPages: JSON;

	isLoading: boolean
	private isLoadingWorkspace: boolean
	private isLoadingPage: boolean;

	constructor(private workspaceService: WorkspaceService) {
		this.isLoading = this.isLoadingWorkspace = this.isLoadingPage = true;
		this.loadedPages = <JSON> {};
	}

	ngOnInit() {
		this.loader = new WorkspaceLoader(<JSON> { });
	}

	ngAfterContentInit(): void {
		setTimeout(()=>{
			this.loadWorkspace();
			this.loadPage('home');
		}, 0);
	}

	private loadWorkspace(): void
	{
		// Initialize workspace
		this.workspaceService.message.processMessage('workspace.json')
		.subscribe(message => {
			let json = message.json();
			this.header = new WorkspaceHeader(json['header']);
			this.footer = new WorkspaceFooter(json['footer']);

			this.isLoadingWorkspace = false;
			this.isLoading = this.isLoadingPage;
		});
	}

	private loadPage(pageId: string): void {

		let page = this.loadedPages[pageId];
		if (page)
		{
			// Already in cache
			this.currentPage = page;
			return;
		}

		this.workspaceService.message.processMessage(`pages/${pageId}.html`)
		.subscribe(message => {
			let json = <JSON> {};
			json['template'] = message.text();

			this.loadedPages[pageId] = new WorkspacePage(json);
			this.currentPage = this.loadedPages[pageId];
			this.currentPage.state = State.ACTIVE;

			this.isLoadingPage = false;
			this.isLoading = this.isLoadingWorkspace;
		});
	}

	private receiveAction($event) {
		
		if (this.currentPage)
		{
			this.currentPage.state = State.INACTIVE;
		}

		this.loadPage($event);
	}
}
