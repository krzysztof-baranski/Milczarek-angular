import { Component, OnInit } from '@angular/core';
import { User } from '../app.module.ts';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

	constructor() { }

	user = {
		name:'',
		surname: '',
		username: '',
		passwd: '',
		repeatedPasswd: ''
	}

	ngOnInit() {
	}

	registerUser () {
		new User (this.user);  
	} 

  	resetFormData () {
		document.getElementById("register-form").reset();
	} 

}
