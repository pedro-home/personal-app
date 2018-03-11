import { Component, OnInit, AfterContentInit } from '@angular/core';
import { WorkspaceService } from './workspace.service';
import { WorkspaceHeader } from './workspace-header/workspace-header.component';
import { WorkspaceFooter } from './workspace-footer/workspace-footer.component';
import { WorkspaceDialog } from './workspace-dialog/workspace-dialog.component';
import { WorkspaceLoaderComponent, WorkspaceLoader } from './workspace-loader/workspace-loader.component';
import { WorkspacePage } from './workspace-page/workspace-page.component';

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

	private isLoading: boolean;

	constructor(private workspaceService: WorkspaceService) {
		this.isLoading = true;
	}

	ngOnInit() {
		this.loader = new WorkspaceLoader();
	}

	ngAfterContentInit(): void {
		setTimeout(()=>{
			this.loadWorkspace();
		}, 2500);
	}

	private loadWorkspace(): void
	{
		// Initialize workspace
		this.workspaceService.message.processMessage('workspace.json')
		.subscribe(message => {
			let json = message.json();
			this.header = new WorkspaceHeader(json['header']);
			this.footer = new WorkspaceFooter(json['footer']);

			this.isLoading = false;
		});
	}

	private loadPage(pageId: string): void {
		this.workspaceService.message.processMessage(`pages/${pageId}/home.json`)
		.subscribe(message => {
			let json = message.json();
			this.currentPage = new WorkspacePage();
		});
	}
}
