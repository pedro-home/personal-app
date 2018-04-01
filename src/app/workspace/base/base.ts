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

export class BindableComponent {
	@Input()
	public model: Model;
}

export class Model {

	constructor(private _data: JSON) {

	}

	public get data(): JSON {
		return this._data;
	}
}