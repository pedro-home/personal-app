import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent, BaseModel } from '../base/base.component';

@Component({
	selector: 'app-workspace-header',
	templateUrl: './workspace-header.component.html',
	styleUrls: ['./workspace-header.component.scss']
})
export class WorkspaceHeaderComponent extends BaseComponent<WorkspaceHeader> {

}
export class WorkspaceHeader extends BaseModel {

	public get buttons(): Array<JSON> {
		return this._model['buttons'];
	}

	public get home(): string {
		return this._model['home'];
	}
}

