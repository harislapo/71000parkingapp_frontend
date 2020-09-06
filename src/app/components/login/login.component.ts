import { NgForm } from '@angular/forms';
import { UserService } from './../../services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { User } from './../register/User.class';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //init empty user
  user: User = new User();

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    if (this.user.username && this.user.password) {
      this.userService.login(this.user).subscribe((response: User) => {
        if (response) {
          this.user = response;
          delete this.user.password;

          //add user to local storage
          localStorage.setItem('loggedUser', JSON.stringify(this.user)); //convert to string

          //check for user role, if user role is admin - redirect to admin
          //page, otherwise go to homepage
          if (this.userService.isAdminRole) {
            this.router.navigateByUrl('admin');
          } else {
            this.router.navigateByUrl('home');
          }
          this.toastr.success('Welcome!');
        } else {
          this.toastr.warning('Wrong username and/or password!');
        }
      });
    } else {
      this.toastr.error('Enter username and password!');
    }
  }

  signUp() {
    this.router.navigateByUrl('register');
  }
}
