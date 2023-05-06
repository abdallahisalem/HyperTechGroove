import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LogInComponent } from './component/autentification/login/login.component';
import { SignInComponent } from './component/autentification/signin/signin.component';
import { TestComponent } from './test/test.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './service/auth-guard.service';
import { AuthGuard2 } from './service/auth-guard2.service';


const routes: Routes = [
  { path: 'login', component: LogInComponent, canActivate: [AuthGuard2] },
  { path: 'signin', component: SignInComponent, canActivate: [AuthGuard2] },
  { path: 'test', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'update', component: UpdateUserComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pageNotFound' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }