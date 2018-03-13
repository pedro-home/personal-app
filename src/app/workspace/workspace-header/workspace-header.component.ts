import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-workspace-header',
	templateUrl: './workspace-header.component.html',
	styleUrls: ['./workspace-header.component.scss']
})
export class WorkspaceHeaderComponent implements OnInit {

	@Input()
	data: WorkspaceHeader;

	@Output()
	private actionEvent = new EventEmitter<string>();
	
	constructor() { }

	ngOnInit() { }

	public executeAction(name: string) {
		let type = name.match(/^.+(?=:)/g)[0];
		name = name.replace(`${type}:`, '');

		if (type === 'page')
		{
			this.actionEvent.emit(name);
		}
	}
}
export class WorkspaceHeader {

	constructor(private model: JSON) { }

	public get buttons(): Array<JSON> {
		return this.model['buttons'];
	}

	public get home(): string {
		return this.model['home'];
	}
}

