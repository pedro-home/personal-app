import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WorkspaceModule } from './workspace/workspace.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
	AppComponent
  ],
  imports: [

	// Browser
	BrowserModule,

	// Workspace
	WorkspaceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
