import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../services/constants.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private constants: ConstantsService,
  		private frmBuilder: FormBuilder) { }

  get title() { return this.login.get('title'); }
  get year() { return this.login.get('year'); }
  get duration() { return this.login.get('duration'); }
  // ...

  ngOnInit() {
  }

  addMovie () {
  	this.constants.movies.push()   	
  } 

}
