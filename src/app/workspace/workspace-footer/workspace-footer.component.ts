import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-workspace-footer',
	templateUrl: './workspace-footer.component.html',
	styleUrls: ['./workspace-footer.component.scss']
})
export class WorkspaceFooterComponent implements OnInit {

	@Input()
	private data: WorkspaceFooter;

	constructor() { }

	ngOnInit() {
	}
}
export class WorkspaceFooter {
	private model: JSON;

	constructor(data: JSON) {
		this.model = data;
	}
	
	public get version(): string
	{
		return this.model['version'];
	}

	public get author(): string
	{
		return this.model['author'];
	}
}