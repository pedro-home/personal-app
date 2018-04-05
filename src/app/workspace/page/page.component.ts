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

	public author: string;
	public version: string;

	constructor() {
		super();

		this.sections = [];
		this.author = environment.author;
		this.version = environment.version;
	}

	ngOnInit(): void {
		this.loadFooter();
		this.loadSections();
	}

	private loadFooter(): void {
		let icon;
		for (let contact of this.model.data['information']['contacts']['personal'])
		{
			switch(contact['name']) {
				case 'localization':
					icon = 'map-marker-alt';
					break;
				case 'phone':
					icon = 'mobile-alt';
					break;
				case 'email':
					icon = 'envelope';
					break;
				default:
					icon = contact['name'];
			}

			contact['icon'] = icon;
		}
	}

	private loadSections(): void {
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