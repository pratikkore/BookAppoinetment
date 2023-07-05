import { Component, OnInit } from '@angular/core';
import { BookingServService } from '../booking-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.scss']
})
export class ShowTableComponent implements OnInit {
  allBookings: any = [];

  constructor(private bkService: BookingServService, private router: Router) { }

  ngOnInit(): void {
    this.allBookings = this.bkService.getBooking();
  }

  onEdit(ind: number) {
    this.bkService.selectedBookIndex = ind;
    this.router.navigate(['/booking']);
  }
  onDel(ind: number) {
   this.bkService.allBookings.splice(ind,1);
  }

}
