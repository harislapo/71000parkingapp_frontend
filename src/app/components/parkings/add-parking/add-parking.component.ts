import { ToastrService } from 'ngx-toastr';
import { RestApiService } from './../../../services/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParkingAdd } from '../Parking-Add.class';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-parking',
  templateUrl: './add-parking.component.html',
  styleUrls: ['./add-parking.component.scss'],
})
export class AddParkingComponent implements OnInit {
  parking: ParkingAdd = new ParkingAdd();

  initLat = 43.8543855;
  initLng = 18.4108403;

  lat: number = 43.8543855;
  lng: number = 18.4108403;

  zoom: number = 14;

  constructor(
    private restApi: RestApiService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onChooseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  addNewParking(form: NgForm) {
    this.parking.lat = this.lat;
    this.parking.lng = this.lng;

    this.restApi.addNewParking(this.parking).subscribe((response: number) => {
      this.parking.id = response;

      this.toastr.success('Successfully added!');
      this.router.navigateByUrl('parkings');
    });
  }
}
