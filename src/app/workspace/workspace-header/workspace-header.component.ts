import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-workspace-header',
	templateUrl: './workspace-header.component.html',
	styleUrls: ['./workspace-header.component.scss']
})
export class WorkspaceHeaderComponent implements OnInit {

	@Input()
	private data: WorkspaceHeader;
	
	constructor() { }

	ngOnInit() { }

}
export class WorkspaceHeader {
	private model: JSON;

	constructor(data: JSON) {
		this.model = data;
	}

	public get buttons(): Array<JSON> {
		return this.model['buttons'];
	}

	public get home(): string {
		return this.model['home'];
	}
}

