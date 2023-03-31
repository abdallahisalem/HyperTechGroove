import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LogInComponent } from './autentification/login/login.component';
import { SignInComponent } from './autentification/signin/signin.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'test', component: TestComponent},
  // {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }