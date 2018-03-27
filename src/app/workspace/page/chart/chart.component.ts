import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

	private size: number;
	private distance: number;

	private item =
	{
		"bars":
		[
			{
				"name": "TYPESCRIPT, ECMASCRIPT & JAVASCRIPT",
				"value": 75
			},
			{
				"name": "HTML5",
				"value": 70
			},
			{
				"name": "SCSS & CSS",
				"value": 80
			},
			{
				"name": "NODEJS",
				"value": 60
			}
		]
	}

	constructor() {
		this.size = 1000;
		this.distance = 25;
	}

	ngOnInit() {
	}

}
