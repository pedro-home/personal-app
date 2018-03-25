import { Injectable, ComponentFactoryResolver, Type, ViewContainerRef, Component, Compiler, NgModule, ModuleWithComponentFactories, ComponentFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { FormulaComponent } from './page/formula/formula.component';
import { BaseComponent, BaseItem } from './base/base';
import { FlexLayoutModule } from '@angular/flex-layout';

@Injectable()
export class ComponentService {
	constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler) {

    }
    
    public loadComponent(container: ViewContainerRef, metadata: Component, item ?: BaseItem): void {
        let factory = this.createComponentFactory(metadata);
        let component = container.createComponent(factory);
        (<BaseComponent> component.instance).item = item;
    }

    private createComponentFactory(metadata: Component): ComponentFactory<any> {
        const decoratedCmp = Component(metadata)(BaseComponent);

        @NgModule({ imports: [CommonModule, MatIconModule, FlexLayoutModule], declarations: [decoratedCmp, FormulaComponent] })
        class RuntimeComponentModule { }

        let module: ModuleWithComponentFactories<any> = this.compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
        return module.componentFactories.find(f => f.componentType === decoratedCmp);
    }
}