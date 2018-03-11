import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-workspace-loader',
	templateUrl: './workspace-loader.component.html',
	styleUrls: ['./workspace-loader.component.scss']
})
export class WorkspaceLoaderComponent implements OnInit {

	@Input()
	private loader: WorkspaceLoader;

	constructor() {

	}

	ngOnInit() { }
}

export class WorkspaceLoader {
	private text: string;
	public loading: boolean;

	constructor(text?: string) {
		this.loading = false;
		this.text = text || 'Loading Resources...';
	}

	public get message(): string {
		return this.text;
	}
}
