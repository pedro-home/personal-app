import { Component, OnInit, Input } from '@angular/core';
import { BindableComponent } from '../../../base/base';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent extends BindableComponent implements OnInit {

	private size: number;
	private distance: number;

	constructor() {
		super();

		this.size = 14;
		this.distance = 200;
	}

	ngOnInit() {
	}

}
