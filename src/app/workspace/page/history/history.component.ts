import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

	private size: number;
	private distance: number;

	private item =
	{
		"birth": "1992",
		"milestones":
		[
			{
				"year": ["2018", "now"],
				"title": "HELLO",
				"description": "FUCK YOU"
			},
			{
				"year": ["2017", "2018"],
				"title": "HELLO",
				"description": "FUCK YOU"
			},
			{
				"year": ["2016", "2017"],
				"title": "HELLO",
				"description": "FUCK YOU"
			},
			{
				"year": ["2014", "2016"],
				"title": "HELLO",
				"description": "FUCK YOU"
			}
		]
	}

	constructor() {
		this.size = 14;
		this.distance = 200;
	}

	ngOnInit() {
	}

}
