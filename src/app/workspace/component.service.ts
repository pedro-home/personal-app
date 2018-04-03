import { Injectable, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, Type } from '@angular/core';
import { ChartComponent } from './page/section/chart/chart.component';
import { FormulaComponent } from './page/section/formula/formula.component';
import { GridComponent } from './page/section/grid/grid.component';
import { HistoryComponent } from './page/section/history/history.component';
import { BindableComponent, Model } from './base/base';
import { AboutComponent } from './page/section/about/about.component';

@Injectable()
export class ComponentService {
	constructor(private componentFactoryResolver: ComponentFactoryResolver) {

	}
	
	public createComponent(container: ViewContainerRef, componentString: string, data?: Model): void {
		container.clear();

		let type = this.getComponent(componentString);
		let factory = this.createComponentFactory(type);
		let component = container.createComponent(factory);

		(<BindableComponent>component.instance).model = data || new Model(<JSON>{});
	}

	private getComponent(name: string): Type<BindableComponent> {
		let component;
		switch (name) {
			case 'about':
				component = AboutComponent;
				break;
			case 'chart':
				component = ChartComponent;
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
				throw `Cannot find specific component ${name}!`;
		}

		return component;
	}

	private createComponentFactory(component: Type<BindableComponent>): ComponentFactory<any> {
		return this.componentFactoryResolver.resolveComponentFactory(component);
	}
}