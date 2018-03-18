import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseItem } from '../base/base';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	@Input()
	item: Header;

	@Output()
	protected actionEvent = new EventEmitter<string>();

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
export class Header extends BaseItem {

	public get buttons(): Array<JSON> {
		return this._model['buttons'];
	}

	public get home(): string {
		return this._model['home'];
	}
}

