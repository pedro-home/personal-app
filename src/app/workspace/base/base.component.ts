import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

export enum State {
	ACTIVE = 'active', INACTIVE = 'inactive'
}

export class BaseAnimations {

	public static BASIC = [
		trigger('fade', [
			state(State.INACTIVE, style({
				opacity: 0
			})),

			state(State.ACTIVE, style({
				opacity: 1
			})),

			transition(`${State.INACTIVE} => ${State.ACTIVE}`, animate('100ms ease-in')),
			transition(`${State.ACTIVE} => ${State.INACTIVE}`, animate('100ms ease-out'))
		])
	];
}

export class BaseItem {

	constructor(protected _model: JSON) {

	}

	public get model(): JSON {
		return this._model;
	}
}

@Component({
	selector: 'app-base',
	template: `<p>This is the base component</p>`,
	animations: BaseAnimations.BASIC
})
export class BaseComponent<T extends BaseItem> implements OnInit {

	@Input()
	item: T;

	@Output()
	protected actionEvent = new EventEmitter<string>();

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