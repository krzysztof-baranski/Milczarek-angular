import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from '../services/constants.service';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private router: Router, 
    private constants: ConstantsService,
    private cartService: CartService,
    private userService: UserService) { }
  
  term = '';
  sortField = '';
  sortDescending = false;

  public get user() : Object {
    return this.userService.currentUser;
  }

  ngOnInit() {
  	this.movies = this.constants.movies; 
  }

  openMovieDetails (index) {
  	this.router.navigate(['/movie-details', index]);

  };

  addToCart (event, index) {
  	event.cancelBubble = true;
    if (!this.user.id && this.user.id !== 0) {
      this.showPopup = index; 
    } else {
      if (this.cartService.add(this.movies[index])) {
        this.showAddedPopup = { value: index };
        setTimeout(function (show) {
          show.value = false;
        }, 1500, this.showAddedPopup); 
      } else {
          this.showAlreadyIsPopup = { value: index };
          setTimeout(function (show) {
            show.value = false;
          }, 1500, this.showAlreadyIsPopup);
        }
      
    }
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
  } 
}
