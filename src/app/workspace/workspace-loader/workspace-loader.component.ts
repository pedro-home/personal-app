import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent, BaseItem } from '../base/base.component';

@Component({
	selector: 'app-workspace-loader',
	templateUrl: './workspace-loader.component.html',
	styleUrls: ['./workspace-loader.component.scss']
})
export class WorkspaceLoaderComponent extends BaseComponent<WorkspaceLoader> {

}

export class WorkspaceLoader extends BaseItem {
	public get message(): string {
		return this._model['text'] || 'Loading Resources...';
	}
}
