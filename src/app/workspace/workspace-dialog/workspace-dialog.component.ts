import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ComponentType } from '@angular/core/src/render3';
import { BaseItem } from '../base/base';

@Component({
	selector: 'app-workspace-dialog',
	template: `<div></div>`
})
export class WorkspaceDialogComponent {

	constructor(private dialog: MatDialog) { }

	ngOnInit() {
		this.openDialog();
	}

	public openDialog(): void
	{
		// let dialogRef = this.dialog.open(this.item['type']);
	}
}


export class WorkspaceDialog extends BaseItem {

	public get type(): string {
		return this._model['type'];
	}
}