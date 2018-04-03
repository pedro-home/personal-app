import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ScrollToModule} from 'ng2-scroll-to';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatGridListModule } from '@angular/material';

import { WorkspaceComponent } from './workspace.component';
import { PageComponent } from './page/page.component';
import { LoaderComponent } from './loader/loader.component';
import { SectionComponent } from './page/section/section.component';
import { FormulaComponent } from './page/section/formula/formula.component';
import { GridComponent } from './page/section/grid/grid.component';
import { HistoryComponent } from './page/section/history/history.component';
import { ChartComponent } from './page/section/chart/chart.component';
import { AboutComponent } from './page/section/about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FlexLayoutModule,
		ScrollToModule.forRoot(),

		// Material
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatGridListModule,
		MatProgressSpinnerModule
	],
	exports: [WorkspaceComponent],
	declarations: [
		WorkspaceComponent,
		NavbarComponent,
		PageComponent,
		LoaderComponent,
		SectionComponent,
		AboutComponent,
		FormulaComponent,
		GridComponent,
		HistoryComponent,
		ChartComponent
	],
	entryComponents: [
		AboutComponent,
		HistoryComponent,
		GridComponent,
		FormulaComponent,
		ChartComponent
	]
})
export class WorkspaceModule {
}
