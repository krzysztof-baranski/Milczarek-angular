import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	constructor(private cartService: CartService,
		private userService: UserService) { }

	public get user() : Object {
		return this.userService.currentUser;
	}

	public get movies() : Array {
		return this.cartService.movies;
	}

	movies;

	ngOnInit() {
	
	}

	remove (id) {
		this.cartService.remove(id); 		
	} 
}
