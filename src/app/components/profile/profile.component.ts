import { RestApiService } from './../../services/rest-api.service';
import { Parking } from './../parkings/Parking.class';
import { UserService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  finishedReservations: Parking[] = [];

  constructor(
    public userService: UserService,
    private restApi: RestApiService
  ) {}

  ngOnInit(): void {
    this.restApi
      .getFinishedReservationsForUser(this.userService.loggedUser.id)
      .subscribe((response: Parking[]) => {
        this.finishedReservations = response;
      });
  }
}
