import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceHeaderComponent } from './workspace-header/workspace-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkspaceComponent, WorkspaceHeaderComponent]
})
export class WorkspaceModule { }
