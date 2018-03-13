import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-workspace-loader',
	templateUrl: './workspace-loader.component.html',
	styleUrls: ['./workspace-loader.component.scss']
})
export class WorkspaceLoaderComponent implements OnInit {

	@Input()
	data: WorkspaceLoader;

	constructor() { }

	ngOnInit() { }
}

export class WorkspaceLoader {
	private text: string;

	constructor(text?: string) {
		this.text = text || 'Loading Resources...';
	}

	public get message(): string {
		return this.text;
	}
}
