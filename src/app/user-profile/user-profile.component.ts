import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/models/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  users!:any[];
  user:Utilisateur=new Utilisateur(); 
  constructor(private utilisateurService:UtilisateurService){
  }
  ngOnInit(): void {
    this.findAllUtilisateurs();
  }
  findAllUtilisateurs(){
    this.utilisateurService.findAll().subscribe(data => {this.users = data});
  }
  saveUtilisateur(){
    this.utilisateurService.save(this.user).subscribe(
      () => {
        this.findAllUtilisateurs();
        this.user = new Utilisateur();
      }
    )
  }
  deleteUtilisateur(id:number){
    this.utilisateurService.delete(id).subscribe(
      () => {
        this.findAllUtilisateurs();
      }
    )

}
}
