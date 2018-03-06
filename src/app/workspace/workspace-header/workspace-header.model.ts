export class WorkspaceHeaderModel {
	private data: Object;

	constructor() {
		this.data = {
			toolbar: [
				{
					name: 'Home'
				},
				{
					name: 'About me'
				},
				{
					name: 'Projects'
				},
				{
					name: 'Contacts'
				}
			]
		};
	}

	public get toolbar(): Array<JSON> {
		return this.data['toolbar'];
	}
}
