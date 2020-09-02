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

  getAllParkings() {
    return this.http.get(this.serverUrl + 'parking/all');
  }

  searchForParkings(searchCriteria: SearchParking){
    return this.http.post(this.serverUrl + 'parking/search', searchCriteria)
  }

  insertToReserved(request){
    return this.http.post(this.serverUrl + 'parking/add-to-reserved', request)
  }

  getReservedForUser(userId: number){
    return this.http.get(this.serverUrl + 'reserved/parking?userId=' + userId)
  }

  removeParkingFromReserve(id: number){
    return this.http.delete(this.serverUrl + 'reserved/delete?id=' + id)
  }

  insertToFinishedReservations(request){
    return this.http.post(this.serverUrl + 'finished-reservations/insert-reservation', request);
  }

  getFinishedReservationsForUser(userId: number){
    return this.http.get(this.serverUrl + 'finished-reservations/all?userId=' + userId)
  }

  getComments(parkingId: number){
    return this.http.get(this.serverUrl + 'parking/comments?parkingId=' + parkingId)
  }

  addComment(request){
    return this.http.post(this.serverUrl + 'parking/comments/add-comment', request)
  }

  addNewParking(parking: ParkingAdd) {
    return this.http.post(this.serverUrl + 'parking/add/new', parking);
  }


}
