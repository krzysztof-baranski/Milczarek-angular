import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openMovieDetails (index) {
  	console.warn ('@@@@ open', index);

  }

  rentMovie (event, index) {
  	console.warn ('@@@ rent', index); 
  	event.cancelBubble = true;
  }  

  movieList = [
  	{
  		title: 'Zielona mila',
  		director: 'Frank Darabont',
  		genre: ['Dramat'],
  		country: 'USA',
  		year: 1999
  	},
  	{
  		title: 'Skazani na Shawshank',
  		director: 'Frank Darabont',
  		genre: ['Dramat'],
  		country: 'USA',
  		year: 1994
  	},
  	{
  		title: 'Forest Gump',
  		director: 'Robert Zemeckis',
  		genre: ['Dramat', 'Komedia'],
  		country: 'USA',
  		year: 1994
  	},
  	{
  		title: 'Requiem dla snu',
  		director: 'Darren Aronofsky',
  		genre: ['Dramat'],
  		country: 'USA',
  		year: 2000
  	},
  	{
  		title: 'Leon zawodowiec',
  		director: 'Luc Besson',
  		genre: ['Dramat', 'Kryminał'],
  		country: 'Francja',
  		year: 1994
  	},
  	{
  		title: 'Matrix',
  		director: 'Lilly Wachowski',
  		genre: ['Akcja', 'Sci-Fi'],
  		country: 'USA',
  		year: 1999
  	},
  	{
  		title: 'Milczenie owiec',
  		director: 'Jonathan Demme',
  		genre: ['Thriller'],
  		country: 'USA',
  		year: 1991
  	},
  	{
  		title: 'Avatar',
  		director: 'James Cameron',
  		genre: ['Sci-Fi'],
  		country: 'Wielka Brytania',
  		year: 2009
  	},
  	{
  		title: 'Gladiator',
  		director: 'Ridley Scott',
  		genre: ['Dramat historyczny'],
  		country: 'USA',
  		year: 2000
  	},
  	{
  		title: 'Shrek',
  		director: 'Andrew Adamson',
  		genre: ['Animacja', 'Familijny', 'Komedia'],
  		country: 'USA',
  		year: 2001
  	},
  	{
  		title: 'Szeregowiec Ryan',
  		director: 'Steven Spielberg',
  		genre: ['Dramat', 'Wojenny'],
  		country: 'USA',
  		year: 1998
  	},
  	{
  		title: 'Titanic',
  		director: 'James Cameron',
  		genre: ['Melodramat', 'Katastroficzny'],
  		country: 'USA',
  		year: 1997
  	},
  	{
  		title: 'Podziemny krąg',
  		director: 'David Fincher',
  		genre: ['Thriller', 'Psychologiczny'],
  		country: 'USA',
  		year: 1999
  	},
  	{
  		title: 'Pulp Fiction',
  		director: 'Quentin Tarantino',
  		genre: ['Gangsterski'],
  		country: 'USA',
  		year: 1994
  	}
  ]

}
