import { Component, OnInit, Input } from '@angular/core';
import { BaseItem } from '../base/base';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
	@Input()
	item: Loader;
}

export class Loader extends BaseItem {
	public get message(): string {
		return this._model['text'] || 'Loading Resources...';
	}
}
