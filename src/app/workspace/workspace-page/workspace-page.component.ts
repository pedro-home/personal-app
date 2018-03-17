import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent, BaseItem, BaseAnimations } from '../base/base.component';

@Component({
	selector: 'app-workspace-page',
	templateUrl: './workspace-page.component.html',
	styleUrls: ['./workspace-page.component.scss']
})
export class WorkspacePageComponent extends BaseComponent<WorkspacePage> {

}

export class WorkspacePage extends BaseItem {

	public get html(): string {
		return this._model['template'];
	}
}