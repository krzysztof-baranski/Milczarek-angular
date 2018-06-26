import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService { 
  	movies = [];

	constructor() { }

	add (movie) {
		let idx = _.findIndex(this.movies, function (item) {
			return item.id === movie.id;
		});

		if (idx < 0) {
			this.movies.push(movie);
			return true; 
		} 
		console.warn('Element jest już na liście'); 
		return false;
	} 

	remove (id) {
		let idx = _.findIndex(this.movies, function (item) {
			return item.id === id;
		}); 
		
		if (idx >= 0) {
			this.movies.splice(idx, 1); 
		} else {
			console.warn('Brak danego elementu w koszyku!'); 
		}
	} 
}
