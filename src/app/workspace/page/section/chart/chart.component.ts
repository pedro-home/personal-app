import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../../../base/base';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.scss']
})
export class ChartComponent extends BaseComponent implements OnInit {

	private size: number;
	private distance: number;

	constructor() {
		super();

		this.size = 1000;
		this.distance = 25;
	}

	ngOnInit() {
	}
}
