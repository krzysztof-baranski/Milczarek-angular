import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  user = {
  	username: ''
  };

  ngOnInit() {
  	this.user.username = localStorage.getItem('username')
  	console.warn ('@@', this.user.username); 
  }

}

let users = [];

export class User {
	newUser;
	constructor(user) {
		this.newUser = Object.assign({}, user);
		this.newUser.id = users.length;
		saveToDB (this.newUser); 
	}

	function saveToDB (user) {
		users.push(user); 
		console.log ('@@@@', users); 
	}

}
