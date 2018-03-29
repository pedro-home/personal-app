import { Component, OnInit, Input } from '@angular/core';
import { BaseItem } from '../../base/base';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

	@Input()
	item: Contacts;

	constructor() { }

	ngOnInit() {
	}

}

export class Contacts extends BaseItem {
	public get contact(): Array<JSON> {
		return this._model['contact'];
	}

	public get social(): Array<JSON> {
		return this._model['social'];
	}
}
