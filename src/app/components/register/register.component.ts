import { User } from './User.class';
import { UserService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  //init empty user object
  user: User = new User();

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  saveUser() {
    //validacija treba!
    this.userService.register(this.user).subscribe((response: number) => {
      this.user.id = response;
      this.toastr.success('Successfully registered!');
      this.router.navigateByUrl('login');
    });
  }

  backToLogin() {
    this.router.navigateByUrl('login');
  }
}
