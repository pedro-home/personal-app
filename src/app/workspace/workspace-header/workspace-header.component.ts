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

	constructor(private model: JSON) { }

	public get buttons(): Array<JSON> {
		return this.model['buttons'];
	}

	public get home(): string {
		return this.model['home'];
	}
}

