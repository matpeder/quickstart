import { Component, Input } from '@angular/core';

@Component({
	selector: 'contact-item',
	template: `
		{{contactItem.name}}
	`
})
export class ContactItemComponent {
	@Input('item') contactItem: {};
}