import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, EmailValidator, ReactiveFormsModule  } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
         {
            path: 'login',
            component: LoginComponent
         },
         {
         	path: 'register',
         	component: RegisterComponent
         },
         {
         	path: 'home',
         	component: MainComponent
         },
         {
         	path: 'user',
         	component: UserComponent
         },
         {
         	path: 'movie-list',
         	component: MovieListComponent
         },
         {
             path: 'movie-list/details/:id',
             component: MovieDetailsComponent
         },
         {
         	path: '**',
         	name: 'home',
         	component: MainComponent
         }
      ])
  ],
  providers: [
  	FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
