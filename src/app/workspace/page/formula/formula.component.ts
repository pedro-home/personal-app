import { Component, OnInit, Input } from '@angular/core';
import { BaseItem } from '../../base/base';

@Component({
	selector: 'app-formula',
	templateUrl: './formula.component.html',
	styleUrls: ['./formula.component.scss']
})
export class FormulaComponent implements OnInit {

	@Input()
	private item: Formula;

	constructor() { }

	ngOnInit() {
	}

}

export class Formula extends BaseItem {
	public get variables(): Array<JSON> {
		return this._model['variables'];
	}

	public get length(): number {
		return this.variables.length;
	}
}
