import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from './workspace.service';
import { WorkspaceHeader } from './workspace-header/workspace-header.component';
import { WorkspaceFooter } from './workspace-footer/workspace-footer.component';
import { WorkspaceDialog } from './workspace-dialog/workspace-dialog.component';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { WorkspaceLoaderComponent, WorkspaceLoader } from './workspace-loader/workspace-loader.component';

@Component({
	selector: 'app-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss'],
	providers: [WorkspaceService]
})

export class WorkspaceComponent implements OnInit {

	@BlockUI()
	private blockUI: NgBlockUI;

	private header: WorkspaceHeader;
	private footer: WorkspaceFooter;
	private loaderComponent;
	private loader: WorkspaceLoader;

	constructor(private workspaceService: WorkspaceService) {
		this.loaderComponent = WorkspaceLoaderComponent;
	}

	ngOnInit() {
		this.loader = new WorkspaceLoader();

		this.loadWorkspace();
	}

	private loadWorkspace(): void
	{
		this.blockUI.start(this.loader.message);
		// Initialize workspace
		/*
		this.workspaceService.message.processMessage('workspace.json')
		.subscribe(message => {
			let json = message.json();
			this.header = new WorkspaceHeader(json['header']);
			this.footer = new WorkspaceFooter(json['footer']);

			// this.workspaceService.loader.remove();
		});
		*/
	}


}
