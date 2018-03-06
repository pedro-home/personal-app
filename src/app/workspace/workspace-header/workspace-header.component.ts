import { Component, OnInit } from '@angular/core';
import { WorkspaceHeaderService } from './workspace-header.service';
import { WorkspaceHeaderModel } from './workspace-header.model';

@Component({
	selector: 'app-workspace-header',
	templateUrl: './workspace-header.component.html',
	styleUrls: ['./workspace-header.component.scss'],
	providers: [WorkspaceHeaderService]
})
export class WorkspaceHeaderComponent implements OnInit {
	private model: WorkspaceHeaderModel;
	
	constructor(private whService: WorkspaceHeaderService) {
		this.model = new WorkspaceHeaderModel();
	}

	getToolbar(index?: number) {
		let toolbar = this.model.toolbar;
		if (index)
		{
			return toolbar[index];
		}

		return toolbar;
	}

	ngOnInit() {
	}

}
