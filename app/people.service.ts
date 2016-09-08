import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PeopleService {

	contacts = [
		{name: 'test'},
		{name: 'test 2'},
		{name: 'test 3'},
	];

	getPeople() {
		return this.contacts;
	}
}