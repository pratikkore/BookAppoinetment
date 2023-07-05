import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingServService } from '../booking-serv.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    phonwNo: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required, Validators.email]),
    area: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    pin: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
  });


  constructor(public bkServ: BookingServService) { }

  ngOnInit(): void {
    if (this.bkServ.selectedBookIndex != null) {
      const currentBookings = this.bkServ.allBookings[this.bkServ.selectedBookIndex];
      this.profileForm = new FormGroup({
        firstName: new FormControl(currentBookings.firstName, [Validators.required]),
        phonwNo: new FormControl(currentBookings.phonwNo, [Validators.required]),
        email: new FormControl(currentBookings.email, [Validators.required, Validators.email]),
        date: new FormControl(currentBookings.date, [Validators.required]),
        area: new FormControl(currentBookings.area, [Validators.required]),
        city: new FormControl(currentBookings.city, [Validators.required]),
        pin: new FormControl(currentBookings.pin, [Validators.required]),
        state: new FormControl(currentBookings.state, [Validators.required]),
      });
    }
  }

  onSubmit() {
    console.log(this.profileForm.value);
    if (this.bkServ.selectedBookIndex == null) {
      this.bkServ.setBookings(this.profileForm.value);
    } else {
      this.bkServ.allBookings[this.bkServ.selectedBookIndex] = this.profileForm.value;
      this.bkServ.selectedBookIndex = null;
    }
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      phonwNo: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      date: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      pin: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
    });

  }

}
