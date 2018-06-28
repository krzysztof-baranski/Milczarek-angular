import { Injectable } from '@angular/core';
import { ConstantsService } from '../services/constants.service';
// import { User } from '../user/user.component.ts';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	constructor(private constants: ConstantsService, private router: Router) { }

    private username: Object;
    private passwd: Object;
    private repeatedPasswd: Object;
    private _currentUser = JSON.parse(localStorage.getItem('user')) || {};

    currentUserChange: Subject<boolean> = new Subject<boolean>();

    public get currentUser () : Object {
    	return this._currentUser;
    }

    public set currentUser(v : Object) {
    	this._currentUser = v;
    }

    logout () {
    	localStorage.removeItem('user'); 
    	this.currentUser = {};
        this.currentUserChange.next(this.currentUser);
    } 

    login (form) {
    	this.username = form.get('username');
	    this.passwd = form.get('passwd'); 
	    let user = this.findUser(this.username, this.passwd);
	    if (user) {
	    	this.currentUser = {
	    		username: user.username,
	    		id: user.id,
	    		admin: user.admin
	    	};
	    	this.setGlobalStorage(this.currentUser);
	    } 
        this.currentUserChange.next(this.currentUser);
    } 

	register (form) {
		this.username = form.get('username');
	    this.passwd = form.get('passwd'); 
        this.repeatedPasswd = form.get('repeatedPasswd');

		if (this.validate ()) {
			let user = {
				username: this.username.value,
				passwd: this.passwd.value
				id: User.users.length;
			}  
			console.log (User.users); 
			new User (user);
			this.setGlobalStorage(user);
		} 
	} 

	setGlobalStorage (user) {
		localStorage.setItem('user', JSON.stringify(user)); 
		this.router.navigate(['/user']);
	}  

	findUser (username, passwd) {
		return _.find(User.users, function (item) {
			return item.username === username.value && 
				item.passwd === passwd.value;
		}) 
	} 

	validate () {
		// USERNAME ================================
		if (!this.constants.emailPattern.test(this.username.value)) {
	       	this.username.errors["pattern"] = true;
	       	this.username.status = 'INVALID';
	       	return false;
	    }

	    // PASSWORD =================================
	    if (this.passwd.value === '') {
	    	if (this.passwd.errors) {
	    		this.passwd.errors['required'] = true;
	    	} else {
	    		this.passwd.errors = { required: true };
	    	}
	    	this.passwd.status = 'INVALID';
	    	return false;
	    } 

	    if (!this.constants.passwordPattern.test(this.passwd.value)) {
	    	if (this.passwd.errors) {
	    		this.passwd.errors['pattern'] = true;
	    	} else {
	    		this.passwd.errors = { pattern: true };
	    	}
	    	this.passwd.status = 'INVALID';
	    	return false;
	    } 


	    if (this.passwd.value !== this.repeatedPasswd.value) {
	    	if (this.repeatedPasswd.errors) {
	    		this.repeatedPasswd.errors['identity'] = true;
	    	} else {
	    		this.repeatedPasswd.errors = { identity: true };
	    	}
	    	this.repeatedPasswd.status = 'INVALID';
	    	return false;
	    } 

	    return true;
	}
}

let users = [{
	id: 0,
	username: 'krz',
	passwd: 'a1',
	admin: true
},
{
	id: 1,
	username: 'kk',
	passwd: 'a2',
	admin: false
}];

export class User {
  static users = users;
  private currentUser: Object;
  
	newUser;
	constructor(user) {
		this.newUser = Object.assign({}, user);
		this.saveToDB (this.newUser); 
	}



	saveToDB (user) {
		users.push(user); 
		console.log ('@@@@', users); 
	}

}