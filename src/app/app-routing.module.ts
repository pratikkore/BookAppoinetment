import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ShowTableComponent } from './show-table/show-table.component';

const routes: Routes = [
  { path: 'booking', component: BookingComponent },
  { path: 'show-booking', component: ShowTableComponent },
  { path: '**', redirectTo: 'booking' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
