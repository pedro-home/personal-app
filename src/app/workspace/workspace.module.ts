import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatCardModule } from '@angular/material';

import { WorkspaceComponent } from './workspace.component';
import { WorkspaceHeaderComponent } from './workspace-header/workspace-header.component';
import { WorkspaceFooterComponent } from './workspace-footer/workspace-footer.component';
import { WorkspacePageComponent } from './workspace-page/workspace-page.component';
import { WorkspaceDialogComponent } from './workspace-dialog/workspace-dialog.component';
import { WorkspaceLoaderComponent } from './workspace-loader/workspace-loader.component';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,

		// Material
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatCardModule,
		MatProgressSpinnerModule

	],
	exports: [WorkspaceComponent],
	declarations: [
		WorkspaceComponent,
		WorkspaceHeaderComponent,
		WorkspaceFooterComponent,
		WorkspacePageComponent,
		WorkspaceDialogComponent,
		WorkspaceLoaderComponent
	],
	entryComponents: [ WorkspacePageComponent ]
})
export class WorkspaceModule { }
