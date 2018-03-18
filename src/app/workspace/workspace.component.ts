import { Component, OnInit, AfterContentInit, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';

import { WorkspaceService } from './workspace.service';
import { WorkspaceHeader } from './workspace-header/workspace-header.component';
import { WorkspaceFooter } from './workspace-footer/workspace-footer.component';
import { WorkspaceLoaderComponent, WorkspaceLoader } from './workspace-loader/workspace-loader.component';
import { WorkspacePage, WorkspacePageComponent } from './workspace-page/workspace-page.component';
import { State } from './base/base';

@Component({
	selector: 'app-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss'],
	providers: [WorkspaceService]
})

export class WorkspaceComponent implements OnInit, AfterContentInit, OnDestroy {

	private header: WorkspaceHeader;
	private footer: WorkspaceFooter;
	private loader: WorkspaceLoader;
	private loadedPages: JSON;
	public isLoading: boolean
	private isLoadingWorkspace: boolean
	private isLoadingPage: boolean;

	@ViewChild("#pageContainer", { read: ViewContainerRef })
	public pageContainer: ViewContainerRef;

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

	ngOnDestroy(): void {
		this.workspaceService.factory.destroyAllComponents(this.pageContainer);    
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

	private createPage(page: WorkspacePage): void {
		this.isLoadingPage = false;
		this.isLoading = this.isLoadingWorkspace;

		this.workspaceService.factory.createComponent(this.pageContainer, WorkspacePageComponent);
	}

	private destroyPage(): void {

	}

	private loadPage(pageId: string): void {

		let page = this.loadedPages[pageId];
		if (page)
		{
			// Already in cache
			this.createPage(page);
			return;
		}

		this.workspaceService.message.processMessage(`pages/${pageId}.html`)
		.subscribe(message => {
			let json = <JSON> {};
			json['template'] = message.text();

			this.loadedPages[pageId] = new WorkspacePage(json);
			this.createPage(this.loadedPages[pageId]);
		});
	}

	private receiveAction($event) {
		this.loadPage($event);
	}
}
