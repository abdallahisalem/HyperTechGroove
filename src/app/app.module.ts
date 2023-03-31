import { HttpInterceptorService } from './service/http-interception-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './appcomponent/app.component';
import { LogInComponent } from './autentification/login/login.component';
import { SignInComponent } from './autentification/signin/signin.component';
import { TestComponent } from './test/test.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignInComponent,
    TestComponent,
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
    HttpInterceptorService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }