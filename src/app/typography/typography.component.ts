import { Component, OnInit } from '@angular/core';
import { Reservation } from 'app/models/reservation';
import { ReservationService } from 'app/services/reservation.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  reservations!:any[];
  reservation:Reservation=new Reservation(); 
  constructor(private reservationService:ReservationService){
  }
  ngOnInit(): void {
    this.findAllReservations();
  }
  findAllReservations(){
    this.reservationService.findAll().subscribe(data => {this.reservations = data});
  }
  saveReservation(){
    this.reservationService.save(this.reservation).subscribe(
      () => {
        this.findAllReservations();
        this.reservation = new Reservation();
      }
    )
  }
  deleteReservation(id:number){
    this.reservationService.delete(id).subscribe(
      () => {
        this.findAllReservations();
      }
    )
  }

}
