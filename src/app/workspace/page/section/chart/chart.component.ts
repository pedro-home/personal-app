import { Component, OnInit, Input } from '@angular/core';
import { BindableComponent } from '../../../base/base';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.scss']
})
export class ChartComponent extends BindableComponent implements OnInit {

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
