import { User } from '../component/autentification/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
const baseUrl = 'http://localhost:9192/api/user';

@Injectable()
export class UserService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'user';

  constructor(private http: HttpClient, private router: Router) {
  }

  login(identifier: any, password: any): Observable<any> {
    return this.http.post(`${baseUrl}/${identifier}/${password}`, {});
  }

  createUser(data: any): Observable<any> {
    return this.http.post(baseUrl, data)
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  logout() {
    console.log('logged out')
    this.router.navigate(['/']);
    localStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  saveUser(response: any) {
    localStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    localStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, JSON.stringify(response));
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    // const user = JSON.parse(localStorage.getItem('user'));

    const user = localStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    console.log(user);
    if (user === null) return false
    return true
  }



  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl)
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete('${baseUrl}/{id}')
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl)
  }
  findByNom(nom: any): Observable<User[]> {
    return this.http.get<User[]>('${baseUrl}/nom=${nom}')
  }
}
