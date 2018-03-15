import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent, BaseModel } from '../base/base.component';

@Component({
	selector: 'app-workspace-loader',
	templateUrl: './workspace-loader.component.html',
	styleUrls: ['./workspace-loader.component.scss']
})
export class WorkspaceLoaderComponent extends BaseComponent<WorkspaceLoader> {

}

export class WorkspaceLoader extends BaseModel {
	public get message(): string {
		return this._model['text'] || 'Loading Resources...';
	}
}
