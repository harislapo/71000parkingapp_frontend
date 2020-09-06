import { ToastrService } from 'ngx-toastr';
import { RestApiService } from './../../services/rest-api.service';
import { GetParking } from './../parkings/GetParking.class';
import { GetUser } from './GetUser.class';
import { UserService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  getUsers: GetUser[] = [];
  //user: GetUser[];
  getParkings: GetParking[] = [];
  //parking: GetParking[];

  constructor(
    public userService: UserService,
    private restApi: RestApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.userService.isAdminRole) {
      this.router.navigateByUrl('notfound');
    }
    this.getAllUsers();
    this.getAllParkings();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((response: GetUser[]) => {
      this.getUsers = response;
    });
  }

  getAllParkings() {
    this.restApi.getAllParkings().subscribe((response: GetParking[]) => {
      this.getParkings = response;
    });
  }

  deleteUser(user: GetUser) {
    this.userService.deleteUser(user.id).subscribe((response) => {
      this.toastr.success('User removed!');
      this.getAllUsers();
    });
  }

  deleteParking(parking: GetParking) {
    this.restApi.deleteParking(parking.id).subscribe((response) => {
      this.toastr.success('Parking removed!');
      this.getAllParkings();
    });
  }
}
