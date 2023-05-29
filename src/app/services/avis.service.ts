import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avis } from 'app/models/avis';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private BASE_URL = "http://localhost:8080/avis"
  constructor(private httpClient:HttpClient) { }
    public findAll():Observable<any>{
      return this.httpClient.get(this.BASE_URL)
  }
  public save(avis:Avis):Observable<any>{
    return this.httpClient.post(this.BASE_URL,avis);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
}
