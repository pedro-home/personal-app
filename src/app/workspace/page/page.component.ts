import { Component, OnInit, Input } from '@angular/core';
import { BaseItem } from '../base/base';

@Component({
	selector: 'app-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent {
	@Input()
	item: Page;
}

export class Page extends BaseItem {

	public get html(): string {
		return this._model['template'];
	}
}