import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingServService {
  allBookings: any = [];
  selectedBookIndex: number | any = null
  constructor() { }
  setBookings(booking: any) {
    this.allBookings.push(booking);
  }

  getBooking() {
    return this.allBookings;
  }
}
