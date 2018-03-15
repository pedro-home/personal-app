import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ComponentType } from '@angular/core/src/render3';
import { BaseComponent, BaseModel } from '../base/base.component';

@Component({
	selector: 'app-workspace-dialog',
	template: `<div></div>`
})
export class WorkspaceDialogComponent extends BaseComponent<WorkspaceDialog> {

	constructor(private dialog: MatDialog)
	{
		super();
	}

	ngOnInit() {
		super.ngOnInit();
		this.openDialog();
	}

	public openDialog(): void
	{
		// let dialogRef = this.dialog.open(this.data['type']);
	}
}


export class WorkspaceDialog extends BaseModel {

	public get type(): string {
		return this._model['type'];
	}
}