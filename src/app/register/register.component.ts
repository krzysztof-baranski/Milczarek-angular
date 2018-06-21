import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.component.ts';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators/*, EmailValidator*/ } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
	register: FormGroup;

	EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	PASSWORD_PATTERN = /^[a-z]{1}[0-9]{1}/;
	isSubmitted = false;

	constructor(private router: Router, private frmBuilder: FormBuilder) { }

	user = {
		name:'',
		surname: '',
		username: '',
		passwd: '',
		repeatedPasswd: ''
	}

	ngOnInit() {
		this.register = this.frmBuilder.group({
			username:["", [Validators.required, Validators.pattern(this.EMAIL_PATTERN)]],
			passwd:["", [Validators.required]],
			repeatedPasswd:["", [Validators.required]]
	    });

	    this.register.valueChanges.subscribe(aa => {
	    	this.resetErrors(); 
	    });
	}

    get username() { return this.register.get('username'); }
    get passwd() { return this.register.get('passwd'); }
    get repeatedPasswd() { return this.register.get('repeatedPasswd'); }

	registerUser () {
		this.isSubmitted = true;
		if (this.validate (this.user)) {
			new User (this.user);  
		} 
		localStorage.setItem ('username', this.username.value); 
		this.router.navigate(['/user']);
	} 

	validate (data) {
		// USERNAME ================================
		if (!this.EMAIL_PATTERN.test(this.username.value)) {
	       	this.username.errors["pattern"] = true;
	       	return false;
	    }

	    // PASSWORD =================================
	    if (this.passwd.value === '') {
	    	if (this.passwd.errors) {
	    		this.passwd.errors['required'] = true;
	    	} else {
	    		this.passwd.errors = { required: true };
	    	}
	    	return false;
	    } 

	    if (!this.PASSWORD_PATTERN.test(this.passwd.value)) {
	    	if (this.passwd.errors) {
	    		this.passwd.errors['pattern'] = true;
	    	} else {
	    		this.passwd.errors = { pattern: true };
	    	}
	    	return false;
	    } 

	    if (this.passwd.value !== this.repeatedPasswd.value) {
	    	console.log ('elo');
	    	if (this.passwd.errors) {
	    		this.passwd.errors['identity'] = true;
	    	} else {
	    		this.passwd.errors = { identity: true };
	    	}
	    	return false;
	    } 

	    return true;
	}

  	resetFormData () {
  		this.isSubmitted = false;
		document.getElementById("register-form").reset();
	} 

	resetErrors () {
    	console.log ('@reset errors', this); 

		this.passwd.errors = null;
		this.repeatedPasswd.errors = null;
		this.username.errors = null;
	}   
}
