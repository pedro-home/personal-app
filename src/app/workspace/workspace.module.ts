import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatCardModule } from '@angular/material';

import { WorkspaceComponent } from './workspace.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { LoaderComponent } from './loader/loader.component';

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
		HeaderComponent,
		FooterComponent,
		PageComponent,
		LoaderComponent
	]
})
export class WorkspaceModule { }
