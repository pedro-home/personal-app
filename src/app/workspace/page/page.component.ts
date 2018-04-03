import { Component, OnInit } from '@angular/core';
import { BindableComponent, Model } from '../base/base';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent extends BindableComponent implements OnInit {

	private sections: Array<Model>;
	private static VERSION: string = environment.VERSION;
	private static AUTHOR: string = environment.AUTHOR;

	constructor() {
		super();

		this.sections = [];

	}

	ngOnInit(): void {
		this.loadSections();
	}

	public loadSections(): void {
		let theme, data;
		for (let section of this.model.data['sections'])
		{
			theme = section['theme'];
			if (theme)
			{
				section['theme'] = `mat-${theme}`;
			}

			data = section['data'];
			section['data'] = new Model(data);

			this.sections.push(new Model(<JSON>(<Object>section)));
		}
	}
}