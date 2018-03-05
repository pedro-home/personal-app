import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

import { WorkspaceComponent } from './workspace.component';
import { WorkspaceHeaderComponent } from './workspace-header/workspace-header.component';

@NgModule({
  imports: [
    CommonModule,

    // Material
    MatToolbarModule

  ],
  declarations: [WorkspaceComponent, WorkspaceHeaderComponent]
})
export class WorkspaceModule { }
