import { MainBooksModule } from './modules/main-books/main-books.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './bootstrap-components/shell/shell.component';
import { LoginComponent } from './bootstrap-components/login/login.component';
import { SignupComponent } from './bootstrap-components/signup/signup.component';
import { HomeComponent } from './bootstrap-components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainBooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
