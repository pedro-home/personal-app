import { Component, OnInit, Input } from '@angular/core';
import { BindableComponent } from '../../../base/base';

@Component({
	selector: 'app-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss']
})
export class GridComponent extends BindableComponent implements OnInit {

	ngOnInit() {
	}

}