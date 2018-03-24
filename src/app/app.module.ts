import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WorkspaceModule } from './workspace/workspace.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

	// Browser
  BrowserModule,
  BrowserAnimationsModule,

	// Workspace
	WorkspaceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
