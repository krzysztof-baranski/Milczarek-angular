import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, EmailValidator, ReactiveFormsModule  } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    MovieListComponent,
    MovieDetailsComponent,
    SortByPipe,
    CartComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
         {
            path: 'login',
            component: LoginComponent
         },
         {
            path: 'logout',
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
             path: 'movie-details/:id',
             component: MovieDetailsComponent
         },
         {
             path: 'cart',
             component: CartComponent
         },
         {
             path: 'admin',
             component: AdminComponent
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
