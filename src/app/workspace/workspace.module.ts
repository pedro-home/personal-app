import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

import { WorkspaceComponent } from './workspace.component';
import { WorkspaceHeaderComponent } from './workspace-header/workspace-header.component';
import { WorkspaceFooterComponent } from './workspace-footer/workspace-footer.component';
import { WorkspacePageComponent } from './workspace-page/workspace-page.component';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,

		// Material
		MatToolbarModule,
		MatButtonModule,
		MatIconModule

	],
	exports: [WorkspaceComponent],
	declarations: [
		WorkspaceComponent,
		WorkspaceHeaderComponent,
		WorkspaceFooterComponent,
		WorkspacePageComponent
	]
})
export class WorkspaceModule { }
