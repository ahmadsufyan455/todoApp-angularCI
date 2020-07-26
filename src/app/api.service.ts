import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiUrl: string = 'http://localhost/rest-api/public/todo';

  baca() {
    return this.http.get(this.apiUrl);
  }

  simpan(data: any) {
    console.log(data)
    return this.http.post(this.apiUrl, data)
  }
}
