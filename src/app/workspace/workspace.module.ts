import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

import { WorkspaceComponent } from './workspace.component';
import { WorkspaceHeaderComponent } from './workspace-header/workspace-header.component';

@NgModule({
  imports: [
    CommonModule,

    // Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule

  ],
  exports: [WorkspaceComponent],
  declarations: [WorkspaceComponent, WorkspaceHeaderComponent]
})
export class WorkspaceModule { }
