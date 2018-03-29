import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';

import { WorkspaceComponent } from './workspace.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { LoaderComponent } from './loader/loader.component';
import { FormulaComponent } from './page/formula/formula.component';
import { HistoryComponent } from './page/history/history.component';
import { ChartComponent } from './page/chart/chart.component';
import { ContactsComponent } from './page/contacts/contacts.component';

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
		MatProgressSpinnerModule
	],
	exports: [WorkspaceComponent],
	declarations: [
		WorkspaceComponent,
		HeaderComponent,
		FooterComponent,
		PageComponent,
		LoaderComponent,
		FormulaComponent,
		HistoryComponent,
		ChartComponent,
		ContactsComponent
	]
})
export class WorkspaceModule {
}
