import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // baseURL = "http://35.154.179.219/users/currentuser";
  baseURL = "http://localhost:5000/users/currentuser";
  constructor(private http:HttpClient,private cookies:CookieService) { }

  // getToken(){
  //   return this.http.get(this.baseURL,this.getHeaders()).toPromise();
  // }

  getToken(){
    if(this.cookies.get('token').length != 0){
      console.log(this.cookies.get('token').length)
      this.http.get(this.baseURL,this.getHeaders()).subscribe(d=>console.log(d))
      return this.cookies.get('token');
    }else{
      return this.cookies.get('token');
    }
  }

  getHeaders(){
    const headerOption = {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        "Authorization": this.cookies.get('token')
      })
    }
    return headerOption;
  }
  logout(){
    this.cookies.delete('token');
  }
}
