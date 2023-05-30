import { Component, OnInit } from '@angular/core';
import { Avis } from 'app/models/avis';
import { AvisService } from 'app/services/avis.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  aviss!:any[];
  avis:Avis=new Avis(); 
  constructor(private avisService:AvisService){
  }
  ngOnInit(): void {
    this.findAllAviss();
  }
  findAllAviss(){
    this.avisService.findAll().subscribe(data => {this.aviss = data});
  }
  saveAvis(){
    this.avisService.save(this.avis).subscribe(
      () => {
        this.findAllAviss();
        this.avis = new Avis();
      }
    )
  }
  deleteAvis(id:number){
    this.avisService.delete(id).subscribe(
      () => {
        this.findAllAviss();
      }
    )
  }

}
