import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

	user = {};
	user = Object.assign(this.user, userInitial); 

	constructor() { }

	ngOnInit() {
	}

 //  	onClickSubmit () {
 //      	alert("Entered Email id : " + this.username);
	// }

	resetFormData () {
		document.getElementById("login-form").reset();
	} 

}
