import { Component, OnInit, Input } from '@angular/core';
import { BaseItem } from '../../base/base';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

	@Input()
	item: Chart;

	private size: number;
	private distance: number;

	constructor() {
		this.size = 1000;
		this.distance = 25;
	}

	ngOnInit() {
	}
}

export class Chart extends BaseItem {
	public get data(): Array<JSON> {
		return this._model['data'];
	}
}
