import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-workspace-page',
	templateUrl: './workspace-page.component.html',
	styleUrls: ['./workspace-page.component.scss']
})
export class WorkspacePageComponent implements OnInit {

	@Input()
	private data: WorkspacePage;

	constructor() { }

	ngOnInit() { }
}

export class WorkspacePage {
	
	constructor() {
		
	}
}