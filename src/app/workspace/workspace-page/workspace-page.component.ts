import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent, BaseModel, BaseAnimations } from '../base/base.component';

@Component({
	selector: 'app-workspace-page',
	templateUrl: './workspace-page.component.html',
	styleUrls: ['./workspace-page.component.scss'],
	animations: BaseAnimations.BASIC
})
export class WorkspacePageComponent extends BaseComponent<WorkspacePage> {

}

export class WorkspacePage extends BaseModel {

	public get html(): string {
		return this._model['template'];
	}
}