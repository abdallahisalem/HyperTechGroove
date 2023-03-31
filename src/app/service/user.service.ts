import { User } from './../autentification/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
const baseUrl = 'http://localhost:9191/api/user';

@Injectable()
export class UserService {



  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username!: String |null;
  public password!: String |null;

  
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl)
  }

  login(username: any, password: any): Observable<any> {
    // return this.http.get('${baseUrl}/${username}/${password}')
    return this.http.get('${baseUrl}/',
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username: string, password: any) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }





  createUser(data: any): Observable<any> {
    return this.http.post(baseUrl, data)
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.http.put('${baseUrl}/${id}', data);
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
