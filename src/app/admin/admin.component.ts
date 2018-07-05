import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../services/constants.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	movies;
	users;
	showDeletedPopup;
	newMovie: FormGroup;
	addUserForm: FormGroup;
	message: string;

	constructor(private constants: ConstantsService,
	  		private frmBuilder: FormBuilder,
	  		private userService: UserService,
	  		private router: Router) { 

	}

  ngOnInit () {
  	this.showDeletedPopup = {
		value: false
	};
  	this.movies = this.constants.movies;
  	this.users = this.userService.users;
	this.newMovie = this.frmBuilder.group({
		title:["", [Validators.required]],
		year:["", [Validators.required]],
		duration:["", [Validators.required]],
		description:["", [Validators.required]],
		director:["", [Validators.required]],
		genre:["", [Validators.required]],
		country:["", [Validators.required]],
		poster:["", [Validators.required]],
    });

    this.addUserForm = this.frmBuilder.group({
		username:["", [Validators.required]],
		passwd:["", [Validators.required]],
		repeatedPasswd:["", [Validators.required]]
    });
  }

  clearMessage () {
  	this.message = '';
  } 

  addUser () {
	this.userService.register(this.addUserForm, true); 
	this.router.navigate(['/admin']);
	let element = document.getElementById('collapseAddUser');
	element.classList.remove('show');
	this.message = 'Użytkownik ' + this.addUserForm.get('username').value + ' został dodany.'; 
  } 

  deleteUser (id) {
  	if (this.userService.deleteUser(id)) {
  		this.users = this.userService.users;
  		this.users = this.users.slice(); // to refresh tpl
  	} 
  } 

  addMovie () {
  	this.constants.movies.push(this.newMovie.value); 
  	this.movies = this.constants.movies;
	this.movies = this.movies.slice(); // to refresh tpl
  	let element = document.getElementById('collapseAddMovie');
	element.classList.remove('show');  	
	this.message = 'Film ' + this.newMovie.get('title').value + ' został dodany.'; 
  } 

  deleteMovie (id) {
  	if (this.constants.deleteMovie(id)) {
  		this.movies = this.constants.movies;
  		this.movies = this.movies.slice(); // to refresh tpl
  	} 
  } 
}
