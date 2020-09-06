import { SearchParking } from './SearchParking.class';
import { RestApiService } from './../../services/rest-api.service';
import { Parking } from './Parking.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss'],
})
export class ParkingsComponent implements OnInit {
  parkings: Parking[] = [];

  //selected parking
  selectedParking: Parking;

  //create an object of type SearchParking
  searchParking: SearchParking;

  constructor(private restApi: RestApiService) {}

  ngOnInit(): void {
    //init it to be an empty object
    this.searchParking = new SearchParking();
    //get all parkings
    this.getAll();
  }

  getAll() {
    this.restApi.getAllParkings().subscribe((response: Parking[]) => {
      this.parkings = response;
    });
  }

  showMore(parking: Parking) {
    //on click save all information in selectedParking about
    //selected parking
    this.selectedParking = parking;
    this.restApi.goToTop();
  }


  searchParkings() {
    this.restApi.searchForParkings(this.searchParking).subscribe((response: Parking[]) => {
      this.parkings = response;
    });
  }
}
