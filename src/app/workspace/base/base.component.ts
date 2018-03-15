import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class BaseComponent<T extends BaseModel> implements OnInit {

	@Input()
	data: T;

	@Output()
	protected actionEvent = new EventEmitter<string>();
	
	constructor() { }

	ngOnInit() { }

	public executeAction(name: string) {
		let type = name.match(/^.+(?=:)/g)[0];
		name = name.replace(`${type}:`, '');

		if (type === 'page')
		{
			this.actionEvent.emit(name);
		}
	}
}
export class BaseModel {

	constructor(protected _model: JSON) { }

	public get model(): JSON {
		return this._model;
	}
}

