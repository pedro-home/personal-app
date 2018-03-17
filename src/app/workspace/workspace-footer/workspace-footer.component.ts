import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent, BaseItem } from '../base/base.component';

@Component({
	selector: 'app-workspace-footer',
	templateUrl: './workspace-footer.component.html',
	styleUrls: ['./workspace-footer.component.scss']
})
export class WorkspaceFooterComponent extends BaseComponent<WorkspaceFooter> {

}

export class WorkspaceFooter extends BaseItem {
	
	public get version(): string
	{
		return this._model['version'];
	}

	public get author(): string
	{
		return this._model['author'];
	}
}