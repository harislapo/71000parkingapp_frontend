import { ParkingAdd } from './../components/parkings/Parking-Add.class';
import { SearchParking } from './../components/parkings/SearchParking.class';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) {}

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  getAllParkings() {
    return this.http.get(this.serverUrl + 'parking/all');
  }

  searchForParkings(searchCriteria: SearchParking) {
    return this.http.post(this.serverUrl + 'parking/search', searchCriteria);
  }

  insertToReserved(request) {
    return this.http.post(this.serverUrl + 'parking/add-to-reserved', request);
  }

  getReservedForUser(userId: number) {
    return this.http.get(
      this.serverUrl + 'reserved/get-reserved?userId=' + userId
    );
  }

  removeParkingFromReserve(id: number) {
    return this.http.delete(this.serverUrl + 'reserved/delete?id=' + id);
  }

  insertToFinishedReservations(request) {
    return this.http.post(
      this.serverUrl + 'finished-reservations/insert-reservation',
      request
    );
  }

  getFinishedReservationsForUser(userId: number) {
    return this.http.get(
      this.serverUrl + 'finished-reservations/all?userId=' + userId
    );
  }

  getComments(parkingId: number) {
    return this.http.get(
      this.serverUrl + 'parking/comments?parkingId=' + parkingId
    );
  }

  addComment(request) {
    return this.http.post(
      this.serverUrl + 'parking/comments/add-comment',
      request
    );
  }

  addNewParking(parking: ParkingAdd) {
    return this.http.post(this.serverUrl + 'parking/add/new', parking);
  }

  deleteParking(id: number) {
    return this.http.delete(this.serverUrl + 'admin/delete-parking?id=' + id);
  }

  addRating(request) {
    return this.http.post(
      this.serverUrl + 'parking/ratings/add-rating',
      request
    );
  }
/*
  getRatingForUser(userId: number, parkingId: number){
    return this.http.get(this.serverUrl + 'parking/ratings/get-rating-for-user?userId=&parkingId=' + userId + parkingId)
  }

  removeRating(parkingId: number, userId: number) {
    return this.http.delete(
      this.serverUrl +
        'parking/ratings/remove-rating?parkingId=&userId=' +
        parkingId +
        userId
    );
  } */
}
