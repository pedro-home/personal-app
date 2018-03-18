import { Injectable, ComponentFactoryResolver, ComponentRef, ComponentFactory, Component, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http';
import { PageComponent } from './page/page.component';

@Injectable()
export class WorkspaceService {
	public message: MessageService;
	public dialog: DialogService;
	public factory: FactoryService;

	constructor(http: Http, resolver: ComponentFactoryResolver) {
		this.message = new MessageService(http);
		this.dialog = new DialogService();
		this.factory = new FactoryService(resolver);
	}
}

class MessageService {

	private static MESSAGE_PATH: string = './assets/messages';
	constructor(private http: Http) {

	}

	public processMessage(path: string): any {
		return this.http.get(`${MessageService.MESSAGE_PATH}/${path}`, '{responseType: "text"}');
	}
}

class DialogService {

}

class FactoryService {
	constructor(private resolver: ComponentFactoryResolver) { }

	public createComponent(container: ViewContainerRef, type: any): void
	{
		let factory = this.resolver.resolveComponentFactory(type);
		container.createComponent(factory);
	}

	public destroyAllComponents(container: ViewContainerRef): void {
		container.clear();
	}

	public destroyComponent(container: ViewContainerRef): void {

	}
}
