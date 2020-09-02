import { ToastrService } from 'ngx-toastr';
import { Parking } from './../parkings/Parking.class';
import { UserService } from './../../services/user-service.service';
import { RestApiService } from './../../services/rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss'],
})
export class ReserveComponent implements OnInit {
  reservations: Parking[];

  constructor(
    private restApi: RestApiService,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getReservationForUser();
  }

  //Fetch parkings in reserved
  getReservationForUser() {
    this.restApi
      .getReservedForUser(this.userService.loggedUser.id)
      .subscribe((response: Parking[]) => {
        this.reservations = response;
      });
  }

  //Confirm reservation and process it to finished_reservations,
  //then delete it from reserved
  confirmReservation(parking: Parking) {
    //Call rest api method for confirming reservation
    this.restApi
      .insertToFinishedReservations({
        parkingId: parking.id,
        userId: this.userService.loggedUser.id,
        reservationId: parking.reservationId,
      })
      .subscribe((response) => {
        this.toastr.success('Reservation successful!');
        this.getReservationForUser();
      });
  }

  removeReservation(parking: Parking) {
    this.restApi
      .removeParkingFromReserve(parking.reservationId)
      .subscribe((response) => {
        this.toastr.success(response['message'])
        this.getReservationForUser();
      });
  }
}
