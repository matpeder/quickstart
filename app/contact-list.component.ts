import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
	selector: 'contact-list',
	providers: [
		PeopleService
	],
	template: `
		<ul>
			<li *ngFor="let contact of people">
				<contact-item [item]="contact"></contact-item>
			</li>
		</ul>
	`
})
export class ContactListComponent {
	people: any[];

	constructor(peopleService: PeopleService) {
		this.people = peopleService.getPeople();
	}
}