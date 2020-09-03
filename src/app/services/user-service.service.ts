import { User } from './../components/register/User.class';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(this.serverUrl + 'user/register', user);
  }

  login(user: User) {
    return this.http.post(this.serverUrl + 'user/login', user);
  }

  // getter for loggedUser, check if there is user logged
  get loggedUser(): User {
    //convert JSON string to an object
    return JSON.parse(localStorage.getItem('loggedUser')) || new User();
  }

  //check for admin role, if not hide Admin from navbar
  get isAdminRole(): boolean {
    const user = this.loggedUser;
    return user.role === 'ADMIN' ? true : false;
  }

  getAllUsers() {
    return this.http.get(this.serverUrl + 'admin/get/all-users');
  }

  deleteUser(id: number) {
    return this.http.delete(this.serverUrl + 'admin/delete-user?id=' + id);
  }

}
