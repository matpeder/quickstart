import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// import 'rxjs/add/operator/toPromise';

@Injectable()
export class PeopleService {

	people: any[] = [];

	constructor(private http: Http) {}

	getPeople(searchterm = '') : Observable<{}> {
		let params = new URLSearchParams();
		params.set('format', 'json');
		if (searchterm.length) {
			params.set('search', searchterm);
		}

		return this.http
			.get('http://swapi.co/api/people/', {
				search: params
			})
			.map(response => response.json().results);
	}

	updatePeople() {
	}
}