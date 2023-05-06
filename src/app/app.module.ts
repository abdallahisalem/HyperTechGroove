import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/appcomponent/app.component';
import { LogInComponent } from './component/autentification/login/login.component';
import { SignInComponent } from './component/autentification/signin/signin.component';
import { TestComponent } from './test/test.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AuthGuard } from './service/auth-guard.service';
import { AuthGuard2 } from './service/auth-guard2.service';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignInComponent,
    TestComponent,
    NavbarComponent,
    HomeComponent,
    UpdateUserComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AuthGuard,
    AuthGuard2
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }