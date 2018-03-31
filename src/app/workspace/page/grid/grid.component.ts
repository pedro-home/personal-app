import { Component, OnInit, Input } from '@angular/core';
import { BaseItem } from '../../base/base';

@Component({
	selector: 'app-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

	@Input()
	item: Grid;

	constructor() { }

	ngOnInit() {
	}

}

export class Grid extends BaseItem {
	public get projects(): Array<JSON> {
		return this._model['projects'];
	}
}