import { Component, OnInit } from '@angular/core';
import { Constants } from '../Constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
  console.warn('@@ this',this);
  }

  movie;
  constants = new Constants (); 


  ngOnInit() {
  	console.warn ('@@@ ngInit', ); 
  	this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
  		console.warn ('####', this.id); 
    });
  	this.movie = this.constants.movies[this.id]; 
  }

}
