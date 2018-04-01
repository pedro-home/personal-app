import { Component, OnInit } from '@angular/core';
import { BaseComponent, Model } from '../base/base';

@Component({
	selector: 'app-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent extends BaseComponent implements OnInit {

	private sections: Array<Model>;

	constructor() {
		super();

		this.sections = [];
	}

	ngOnInit(): void {
		this.loadSections();
	}

	public loadSections(): void {
		for (let section of this.model.data['sections'])
		{
			this.sections.push(new Model(<JSON>(<Object>section)));
		}
	}
}