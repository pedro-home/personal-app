import { Component, OnInit, Input } from '@angular/core';
import { BaseItem } from '../base/base';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

	@Input()
	item: Footer;

	ngOnInit() { }
}

export class Footer extends BaseItem {
	
	public get version(): string
	{
		return this._model['version'];
	}

	public get author(): string
	{
		return this._model['author'];
	}
}