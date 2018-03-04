import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
	AppComponent
  ],
  imports: [

	// Browser
	BrowserModule,

	// Material
	MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
