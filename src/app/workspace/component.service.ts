import { Injectable, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, Type } from '@angular/core';
import { ChartComponent } from './page/section/chart/chart.component';
import { FormulaComponent } from './page/section/formula/formula.component';
import { GridComponent } from './page/section/grid/grid.component';
import { ContactsComponent } from './page/section/contacts/contacts.component';
import { HistoryComponent } from './page/section/history/history.component';
import { BaseComponent, Model } from './base/base';

@Injectable()
export class ComponentService {
	constructor(private componentFactoryResolver: ComponentFactoryResolver) {

	}
	
	public createComponent(container: ViewContainerRef, componentString: string, data?: Model): void {
		container.clear();

		let type = this.getComponent(componentString);
		let factory = this.createComponentFactory(type);
		let component = container.createComponent(factory);

		(<BaseComponent>component.instance).model = data || new Model(<JSON>{});
	}

	private getComponent(name: string): Type<BaseComponent> {
		let component;
		switch (name) {
			case 'chart':
				component = ChartComponent;
				break;
			case 'contacts':
				component = ContactsComponent;
				break;
			case 'formula':
				component = FormulaComponent;
				break;
			case 'grid':
				component = GridComponent;
				break;
			case 'history':
				component = HistoryComponent;
				break;
			default:
				throw 'Cannot find specific component '+ name +'!';
		}

		return component;
	}

	private createComponentFactory(component: Type<BaseComponent>): ComponentFactory<any> {
		return this.componentFactoryResolver.resolveComponentFactory(component);
	}
}