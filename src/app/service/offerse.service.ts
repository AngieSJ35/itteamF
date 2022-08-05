import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offerse } from '../models/offerse';

@Injectable({
  providedIn: 'root'
})
export class OfferseService {

  offerseURL = 'http://localhost:8080/offerse/'

  constructor(private httpclient:HttpClient) { }

  public list(): Observable<Offerse[]> {
    return this.httpclient.get<Offerse[]>(this.offerseURL + 'list');
  }

  public detail(offerse_id: number): Observable<Offerse> {
    return this.httpclient.get<Offerse>(this.offerseURL + `detail/${offerse_id}`);
  }

  public detailName(name: string): Observable<Offerse> {
    return this.httpclient.get<Offerse>(this.offerseURL + `detailname/${name}`);
  }

  public save(offerse: Offerse): Observable<any> {
    return this.httpclient.post<any>(this.offerseURL + 'create', offerse);
  }

  public update(offerse_id: number, offerse: Offerse): Observable<any> {
    return this.httpclient.put<any>(this.offerseURL + `update/${offerse_id}`, offerse);
  }

  public delete(offerse_id: number): Observable<any> {
    return this.httpclient.delete<any>(this.offerseURL + `delete/${offerse_id}`);
  }

}
