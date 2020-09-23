import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../services/user-service.service';
import { RestApiService } from './../../../services/rest-api.service';
import { Parking } from './../Parking.class';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-preview',
  templateUrl: './parking-preview.component.html',
  styleUrls: ['./parking-preview.component.scss'],
})
export class ParkingPreviewComponent implements OnInit {
  @Input() parking: Parking; /* for selected parking from parent component*/
  @Output() backToParkingsEmit = new EventEmitter();

  avgRating: number;
  existingReservation = [];
  lat;
  lng;
  zoom: number = 17;

  constructor(
    private restApi: RestApiService,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lat = this.parking.lat;
    this.lng = this.parking.lng;
    this.getAvgRating();
    this.checkForExistingReserve();
  }

  backToParkings() {
    this.backToParkingsEmit.emit();
    this.restApi.goToTop();
  }

  addToReserved(parking: Parking) {
    this.restApi
      .insertToReserved({
        userId: this.userService.loggedUser.id,
        parkingId: parking.id,
      })
      .subscribe((response) => {
        this.toastr.success('Added to reservations!');
        this.restApi.goToTop();
        this.router.navigateByUrl('reserved');
      });
  }

  getAvgRating() {
    this.restApi
      .getAvgRating(this.parking.id)
      .subscribe((response: number) => {
        this.avgRating = response[0].rating;
      });
  }

  checkForExistingReserve() {
    this.restApi.getReservedForUser(this.userService.loggedUser.id).subscribe((response: []) => {
      this.existingReservation = response;
    })
  }
}
