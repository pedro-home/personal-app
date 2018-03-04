import { Component, OnInit } from '@angular/core';
import { WorkspaceHeaderComponent } from './workspace-header/workspace-header.component';
import { ButtonComponent } from '../button/button.component';

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

			}
		],

		footer: [
			{

			}
		]
	};
  }

  ngOnInit() {
	this.header = new WorkspaceHeaderComponent(this.options.header);
  }

}
