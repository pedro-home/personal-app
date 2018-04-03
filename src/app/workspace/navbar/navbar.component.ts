import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BindableComponent } from '../base/base';
import { RendererService } from '../renderer.service';
import { DomService } from '../dom.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	providers: [DomService, RendererService]
})
export class NavbarComponent extends BindableComponent implements OnInit {

	private showToolbar: boolean;
	private highlightButton: boolean;

	constructor(private rendererService: RendererService, private domService: DomService) {
		super();

		this.showToolbar = false;
		this.highlightButton = false;
	}

	ngOnInit(): void {

		let doc = this.domService.document;
		let docElem = doc.documentElement;

		let id, elem;
		let threshold;
		let fullHeight = docElem.offsetHeight;

		// TODO Increase performance on scroll event
		this.rendererService.on('window', 'scroll', (event: any) => {
			this.showToolbar = (docElem.scrollTop > docElem.clientHeight/2);
			for (let button of this.model.data['buttons'])
			{
				threshold = (docElem.scrollTop + docElem.clientHeight/4);
				button['highlight'] = false;

				id = button['action'];
				if (id[0] === '#')
				{
					elem = doc.getElementById(id.substr(1));

					if ((threshold >= elem.offsetTop &&
						threshold <= elem.offsetTop + elem.clientHeight) ||
						(docElem.scrollTop + docElem.clientHeight === fullHeight &&
						elem.offsetTop + elem.clientHeight === fullHeight)) {
						button['highlight'] = true;
					}
				}
			}
		});
	}
}

