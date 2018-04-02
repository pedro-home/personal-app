import { Injectable } from '@angular/core';

function _window(): Window {
    return window;
}

function _document(): Document {
    return document;
}

@Injectable()
export class DomService {
	constructor()
	{

    }
    
    public get window(): Window {
        return _window();
    }

    public get document(): Document {
        return _document();
    }

    public get body(): HTMLElement {
        return _document().body;
    }
}