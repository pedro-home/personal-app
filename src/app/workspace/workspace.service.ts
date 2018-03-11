import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkspaceService {
	public message: MessageService;
	public dialog: DialogService;

	constructor(http: Http) {
		this.message = new MessageService(http);
		this.dialog = new DialogService();
	}
}

class MessageService {

	private static MESSAGE_PATH: string = './assets/messages';
	constructor(private http: Http) {

	}

	public processMessage(path: string): any {
		return this.http.get(`${MessageService.MESSAGE_PATH}/${path}`);
	}
}

class DialogService {

}
