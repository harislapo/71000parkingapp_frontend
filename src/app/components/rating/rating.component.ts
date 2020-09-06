import { UserService } from './../../services/user-service.service';
import { RateParking } from './Rate-Parking.class';
import { ToastrService } from 'ngx-toastr';
import { RestApiService } from './../../services/rest-api.service';
import { Component, OnInit, Input } from '@angular/core';
import { Parking } from '../parkings/Parking.class';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() parkingId: Parking;

  rating = 0;
  constructor(
    private restApi: RestApiService,
    private toastr: ToastrService,
    public userService: UserService
  ) {}

  ngOnInit(): void {}

  addRating() {
    this.restApi
      .addRating({
        parkingId: this.parkingId.id,
        userId: this.userService.loggedUser.id,
        rating: this.rating,
      })
      .subscribe((response) => {
        this.toastr.success('Thank you for rating!');
      });
  }

  onClear(){

  }
}
