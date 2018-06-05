import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

let users = [];

export class User {
	newUser;
	constructor(user) {
		// code...
		this.newUser = Object.assign({}, user);
		saveToDB (this.newUser); 
	}

	function saveToDB (user) {
		users.push(user); 
		console.log ('@@@@', users); 
	}

}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
         {
            path: 'login',
            component: LoginComponent
         },
         {
         	path: 'register',
         	component: RegisterComponent
         }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
