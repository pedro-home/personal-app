import { Component, OnInit } from '@angular/core';
import { WorkspaceHeaderService } from './workspace-header.service';

@Component({
	selector: 'app-workspace-header',
	templateUrl: './workspace-header.component.html',
	styleUrls: ['./workspace-header.component.scss'],
	providers: [WorkspaceHeaderService]
})
export class WorkspaceHeaderComponent implements OnInit {
	private header: WorkspaceHeader;
	
	constructor(private whService: WorkspaceHeaderService) {
		this.header = new WorkspaceHeader();
	}

	ngOnInit() {
	}

}
class WorkspaceHeader {
	private data: Object;

	constructor() {
		this.data = {
			toolbar: [
				{
					icon: 'favorite'
				},
				{
					name: 'About me'
				},
				{
					name: 'Projects'
				},
				{
					name: 'Contacts'
				}
			]
		};
	}

	public get toolbar(): Array<JSON> {
		return this.data['toolbar'];
	}
}

