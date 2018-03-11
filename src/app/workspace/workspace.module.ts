import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { BlockUIModule } from 'ng-block-ui';

import { WorkspaceComponent } from './workspace.component';
import { WorkspaceHeaderComponent } from './workspace-header/workspace-header.component';
import { WorkspaceFooterComponent } from './workspace-footer/workspace-footer.component';
import { WorkspacePageComponent } from './workspace-page/workspace-page.component';
import { WorkspaceLoaderComponent } from './workspace-loader/workspace-loader.component';
import { WorkspaceDialogComponent } from './workspace-dialog/workspace-dialog.component';

@NgModule({
	imports: [
		BrowserAnimationsModule,
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
		WorkspaceHeaderComponent,
		WorkspaceFooterComponent,
		WorkspacePageComponent,
		WorkspaceDialogComponent,
		WorkspaceLoaderComponent
	],
	entryComponents: [WorkspaceLoaderComponent]
})
export class WorkspaceModule { }
