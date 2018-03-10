import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from './workspace.service';
import { WorkspaceHeader } from './workspace-header/workspace-header.component';
import { WorkspaceFooter } from './workspace-footer/workspace-footer.component';

@Component({
	selector: 'app-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss'],
	providers: [WorkspaceService]
})

export class WorkspaceComponent implements OnInit {
	private header: WorkspaceHeader;
	private footer: WorkspaceFooter;

	constructor(private workspaceService: WorkspaceService) {
	}

	ngOnInit() {

		// Initialize workspace
		this.workspaceService.processMessage('workspace.json')
		.subscribe(message => {
			let json = message.json();
			this.header = new WorkspaceHeader(json['header']);
			this.footer = new WorkspaceFooter(json['footer']);
		});
	}
}
