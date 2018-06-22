import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../Constants';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private router: Router) { }
  constants = new Constants (); 
  term = '';
  sortField = '';
  sortDescending = false;

  ngOnInit() {
  	console.warn ('@@@@ Co', this.constants); 
  	this.movies = this.constants.movies; 
  }

  openMovieDetails (index) {
  	console.warn ('@@@@ open', index);
  	this.router.navigate(['/movie-details', index]);

  };

  rentMovie (event, index) {
  	console.warn ('@@@ rent', index); 
  	event.cancelBubble = true;
  }; 

  sortBy (event) {
  	var text;
  	if (event.target && event.target.innerText) {
  		text = event.target.innerText.toLowerCase(); 
  		
  		if (text === 'action') {
  			return;
  		}

  		if (this.sortField === text) {
  			this.sortDescending = !this.sortDescending;
  		} else {
  			this.sortField = text;
  		}

  	} 
  	console.warn ('@@@', event); 
  } 
}
