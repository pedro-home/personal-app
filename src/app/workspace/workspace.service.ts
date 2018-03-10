import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkspaceService {

	private static MESSAGE_PATH: string = './assets/messages';
	constructor(private http: Http) {

	}

	public processMessage(path: string): any {
		return this.http.get(`${WorkspaceService.MESSAGE_PATH}/${path}`);
	}
}
