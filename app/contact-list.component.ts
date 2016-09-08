import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
	selector: 'contact-list',
	providers: [
		PeopleService
	],
	template: `
		<input type="text" #searchField (keyup)="getPeople(searchField.value)" />
		<ul>
			<li *ngFor="let contact of people">
				<contact-item [item]="contact"></contact-item>
			</li>
		</ul>
	`
})
export class ContactListComponent {
	people: any[] = [];
	searchQuery:string;

	constructor(private peopleService: PeopleService) {}

	getPeople(value = '') {
		this.peopleService.getPeople(value)
			.subscribe(
				(res) => this.people = res,
				() => {
					console.error('error');
				}
			);
	}
}