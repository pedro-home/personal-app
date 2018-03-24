import { Injectable, ComponentFactoryResolver, Type, ViewContainerRef, Component, Compiler, NgModule, ModuleWithComponentFactories, ComponentFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { FormulaComponent } from './page/formula/formula.component';

@Injectable()
export class ComponentService {
	constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler) {

    }
    
    public loadComponent(container: ViewContainerRef, metadata: Component): any {
        let factory = this.createComponentFactory(metadata);
        return container.createComponent(factory);
    }

    private createComponentFactory(metadata: Component): ComponentFactory<any> {
        const decoratedCmp = Component(metadata)(class RuntimeComponent {});

        @NgModule({ imports: [CommonModule, MatIconModule], declarations: [decoratedCmp, FormulaComponent] })
        class RuntimeComponentModule { }

        let module: ModuleWithComponentFactories<any> = this.compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
        return module.componentFactories.find(f => f.componentType === decoratedCmp);
    }
}