import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

const userInitial = {
	passwd: '',
	username: ''
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	login: FormGroup;

	constructor(private route: ActivatedRoute, private userService: UserService,
		private frmBuilder: FormBuilder) { }

	get username() { return this.login.get('username'); }
    get passwd() { return this.login.get('passwd'); }

	ngOnInit() {
		if (this.route.url.value[0].path === 'logout') {
			this.userService.logout(); 
		}

		this.login = this.frmBuilder.group({
			username:["", [Validators.required]],
			passwd:["", [Validators.required]],
	    });

	    this.login.valueChanges.subscribe(aa => {
	    	this.resetErrors();  
	    });
	}

 	onClickSubmit () {
      	this.userService.login(this.login) ;
	}

	resetFormData () {
		document.getElementById("login-form").reset();
	} 

	resetErrors () {
		console.log ('@reset errors', this); 

		this.passwd.errors = null;
		this.username.errors = null;
	} 
}
