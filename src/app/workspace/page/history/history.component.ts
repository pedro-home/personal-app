import { Component, OnInit, Input } from '@angular/core';
import { BaseItem } from '../../base/base';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

	@Input()
	item: History;

	private size: number;
	private distance: number;

	constructor() {
		this.size = 14;
		this.distance = 200;
	}

	ngOnInit() {
	}

}

export class History extends BaseItem {
	public get birth(): string {
		return this._model['birth'];
	}

	public get milestones(): Array<JSON> {
		return this._model['milestones'];
	}
}
