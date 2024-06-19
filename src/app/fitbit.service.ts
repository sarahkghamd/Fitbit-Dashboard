import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FitbitService {

  private apiUrl = 'https://api.fitbit.com/1/user/-/activities.json'; 
  private accessToken = "YOUR_ACCESS_TOKEN_HERE";

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
}
