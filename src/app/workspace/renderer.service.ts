import { Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class RendererService {
	constructor(private renderer: Renderer2)
	{

	}

	public addClass(element: any, className: string): void
	{
		this.renderer.addClass(element, className);
	}

	public removeClass(element: any, className: string): void
	{
		this.renderer.removeClass(element, className);
	}

	public on(element: any, event: string, fn: any): void {
		this.renderer.listen(element, event, fn);
	}
}