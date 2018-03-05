import { Component, OnInit } from '@angular/core';
import { WorkspaceHeaderComponent } from './workspace-header/workspace-header.component';

@Component({
	selector: 'app-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss']
})

export class WorkspaceComponent implements OnInit {

	header: WorkspaceHeaderComponent;
	options: object;
  
	constructor()
	{
		this.options = {
			header: [
				{
					name: 'Home'
				},
				{
					name: 'About me'
				},
				{
					name: 'Projects'
				},
				{
					name: 'Contacts'
				}
			],

			footer: [
				{

				}
			]
		};
	}

	ngOnInit() {
		// this.header = new WorkspaceHeaderComponent(this.options['header']);
	}

}
