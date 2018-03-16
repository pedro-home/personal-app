import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';

import { WorkspaceComponent } from './workspace.component';
import { WorkspaceHeaderComponent } from './workspace-header/workspace-header.component';
import { WorkspaceFooterComponent } from './workspace-footer/workspace-footer.component';
import { WorkspacePageComponent } from './workspace-page/workspace-page.component';
import { WorkspaceDialogComponent } from './workspace-dialog/workspace-dialog.component';
import { WorkspaceLoaderComponent } from './workspace-loader/workspace-loader.component';
import { BaseComponent } from './base/base.component';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,

		// Material
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatProgressSpinnerModule

	],
	exports: [WorkspaceComponent],
	declarations: [
		WorkspaceComponent,
		BaseComponent,
		WorkspaceHeaderComponent,
		WorkspaceFooterComponent,
		WorkspacePageComponent,
		WorkspaceDialogComponent,
		WorkspaceLoaderComponent
	],
	entryComponents: []
})
export class WorkspaceModule { }
