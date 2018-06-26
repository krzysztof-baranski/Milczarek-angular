import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ConstantsService } from '../services/constants.service';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
	register: FormGroup;
	isSubmitted = false;

	constructor(private frmBuilder: FormBuilder, 
		private userService: UserService, 
		private constants: ConstantsService,
		private cdRef: ChangeDetectorRef) { }

    get username() { return this.register.get('username'); }
    get passwd() { return this.register.get('passwd'); }
    get repeatedPasswd() { return this.register.get('repeatedPasswd'); }

	ngOnInit() {
		this.register = this.frmBuilder.group({
			username:["", [Validators.required, Validators.pattern(this.constants.emailPattern)]],
			passwd:["", [Validators.required, Validators.pattern(this.constants.passwordPattern)]],
			repeatedPasswd:["", [Validators.required, Validators.pattern(this.constants.passwordPattern)]]
	    });

	    this.register.valueChanges.subscribe(aa => {
	    	this.resetErrors();  
	    });
	}

	ngAfterViewChecked() {
	  	this.cdRef.detectChanges();
	}

	registerUser () {
		this.isSubmitted = true;
		let u = this.userService.register(this.register, this.user); 
	} 

  	resetFormData () {
  		this.isSubmitted = false;
		document.getElementById("register-form").reset();
	} 

	resetErrors () {
		console.log ('@reset errors', this); 

		// this.passwd.errors = null;
		// this.repeatedPasswd.errors = null;
		// this.username.errors = null;
	} 
}
