import { Component, OnInit, Input } from '@angular/core';
import { BaseItem } from '../base/base';

@Component({
	selector: 'app-workspace-footer',
	templateUrl: './workspace-footer.component.html',
	styleUrls: ['./workspace-footer.component.scss']
})
export class WorkspaceFooterComponent {

	@Input()
	item: WorkspaceFooter;

	ngOnInit() { }
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