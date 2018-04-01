import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule, MatGridListModule } from '@angular/material';

import { WorkspaceComponent } from './workspace.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { LoaderComponent } from './loader/loader.component';
import { SectionComponent } from './page/section/section.component';
import { FormulaComponent } from './page/section/formula/formula.component';
import { GridComponent } from './page/section/grid/grid.component';
import { HistoryComponent } from './page/section/history/history.component';
import { ChartComponent } from './page/section/chart/chart.component';
import { ContactsComponent } from './page/section/contacts/contacts.component';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FlexLayoutModule,

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
		HeaderComponent,
		FooterComponent,
		PageComponent,
		SectionComponent,
		LoaderComponent,
		FormulaComponent,
		GridComponent,
		HistoryComponent,
		ChartComponent,
		ContactsComponent
	]
})
export class WorkspaceModule {
}
