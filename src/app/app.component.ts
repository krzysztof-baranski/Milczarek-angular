import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Subject } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges {
  title = 'app';
  currentUser = this.userService.currentUser;

	constructor (private userService: UserService, private cdRef: ChangeDetectorRef) {
		this.userService.currentUserChange.subscribe((value) => {
			this.currentUser = value; 
		});
		console.warn ('userlogged', this.currentUser); 
	}  

  	ngAfterViewChecked() {
	  	this.cdRef.detectChanges();
	}
	
}
