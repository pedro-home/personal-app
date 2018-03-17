import { Component, OnInit, Input } from '@angular/core';
import { BaseItem } from '../base/base';

@Component({
	selector: 'app-workspace-page',
	templateUrl: './workspace-page.component.html',
	styleUrls: ['./workspace-page.component.scss']
})
export class WorkspacePageComponent {
	@Input()
	item: WorkspacePage;
}

export class WorkspacePage extends BaseItem {

	public get html(): string {
		return this._model['template'];
	}
}