import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ComponentType } from '@angular/core/src/render3';

@Component({
	selector: 'app-workspace-dialog',
	template: `<div></div>`
})
export class WorkspaceDialogComponent implements OnInit {

	@Input()
	private selected: WorkspaceDialog;

	constructor(private dialog: MatDialog)
	{

	}

	ngOnInit() {
		this.openDialog();
	}

	public openDialog(): void
	{
		let dialogRef = this.dialog.open(this.selected.type);
	}
}


export class WorkspaceDialog {

	constructor(private componentType)	{ }

	public get type() {
		return this.componentType;
	}
}