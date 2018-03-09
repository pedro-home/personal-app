import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'app-workspace-header',
	templateUrl: './workspace-header.component.html',
	styleUrls: ['./workspace-header.component.scss']
})
export class WorkspaceHeaderComponent implements OnInit {
	private header: WorkspaceHeader;
	private data;
	
	constructor(private http:Http) {
		this.http.get('./assets/messages/workspace/header.json')
		.subscribe(res => this.header = new WorkspaceHeader(res.json()));
	}

	ngOnInit() {

	}

}
class WorkspaceHeader {
	private data: JSON;

	constructor(data: JSON) {
		this.data = data;
	}

	public get toolbar(): Array<JSON> {
		return this.data['toolbar'];
	}

	public get home(): string {
		return this.data['home'];
	}
}

