import { Component, OnInit, Input } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
	selector: 'app-workspace-loader',
	templateUrl: './workspace-loader.component.html',
	styleUrls: ['./workspace-loader.component.scss']
})
export class WorkspaceLoaderComponent implements OnInit {

	@BlockUI()
	private blockUI: NgBlockUI;

	@Input()
	private loader: WorkspaceLoader;

	constructor() {

	}

	ngOnInit() { }

	public toggle(): void {
		if (!this.loader.loading)
		{
			this.blockUI.start(this.loader.message);
		}
		else
		{
			this.blockUI.stop();
		}
	}
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
