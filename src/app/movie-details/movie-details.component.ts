import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../services/constants.service';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private constants: ConstantsService,
    private cartService: CartService,
    private userService: UserService) { 
  }

  movie;

  public get user() : Object {
    return this.userService.currentUser;
  }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
  	this.movie = this.constants.movies[this.id]; 
  }

  addToCart(movie) {
    if (!this.user.id && this.user.id !== 0) {
      this.showLogInPopup = { value: true }; // musi byc obiekt bo przekazywany jest wtedy przez referencje
      setTimeout (function (show) {
        show.value = false;
      }, 1500, this.showLogInPopup); 
    } else {
      if (this.cartService.add(movie)) {
        this.showAddedPopup = { value: true };
        setTimeout(function (show) {
          show.value = false;
        }, 1500, this.showAddedPopup); 
      } else {
        this.showAlreadyIsPopup = { value: true };
        setTimeout(function (show) {
          show.value = false;
        }, 1500, this.showAlreadyIsPopup);
      }
    } 
  } 
}
