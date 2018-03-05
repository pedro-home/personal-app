import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-workspace-header',
	templateUrl: './workspace-header.component.html',
	styleUrls: ['./workspace-header.component.scss']
})
export class WorkspaceHeaderComponent implements OnInit {
	options: object;

	constructor(options: object) {
		this.options = options;
	}

	ngOnInit() {

	}

}
