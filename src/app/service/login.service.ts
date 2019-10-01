import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headerOption = {
  headers:new HttpHeaders({
    'Content-Type':  'application/json'
    // "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhY2hpbnN3YXBuYTE0M0BnbWFpbC5jb20iLCJpYXQiOjE1Njc4NzU0Mjd9.G_pdYex19UUtfyQbKAb4pfH-ZjG7KZqQQGeeh97BqKY"
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // URL:string = "http://35.154.179.219";
  URL:string = "http://localhost:5000";

  constructor(private http:HttpClient) { }

  loginPost(data){
    return this.http.post(`${this.URL}/login`,data,headerOption);
  }
  
  registerUser(data){
    return this.http.post(`${this.URL}/register`,data,headerOption);
  }
}
