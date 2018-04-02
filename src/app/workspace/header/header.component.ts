import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BindableComponent } from '../base/base';
import { RendererService } from '../renderer.service';
import { DomService } from '../dom.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	providers: [DomService, RendererService]
})
export class HeaderComponent extends BindableComponent implements OnInit {

	private shrinkToolbar: boolean;

	constructor(private rendererService: RendererService, private domService: DomService) {
		super();

		this.shrinkToolbar = false;
	}

	ngOnInit(): void {
		this.rendererService.on('window', 'scroll', (event: any) => {
			let doc = this.domService.document.documentElement;
			this.shrinkToolbar = (doc.scrollTop > doc.clientHeight/2);
		});
	}
}

