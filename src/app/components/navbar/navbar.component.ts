import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //userService is public in order to use its features in HTML template
  constructor(public userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('login');
    this.toastr.success('Sucessfully logged out!')
  }
}
