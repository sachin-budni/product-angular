import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class ProductService {

  constructor(private http:HttpClient,private cookies:CookieService) { }
  // productURL = "http://35.154.179.219/products"
  productURL = "http://localhost:5000/products"

  getEmail(){
    if(this.cookies.get('userdata').length){
      let data = JSON.parse(this.cookies.get('userdata'));
      return data["_id"];
    }
    return "";
  }

  getAllProducts(){
    return this.http.get(this.productURL+"?"+this.getEmail(),this.getHeaders).toPromise();
  }

  saveProduct(data){
    return this.http.post(this.productURL,data,this.getHeaders);
  }
  updateProduct(id,data){
    return this.http.patch(this.productURL+"/"+id,{likes:data+1},this.getHeaders).toPromise();
  }
  delete(id){
    return this.http.delete((this.productURL+"/"+id),this.getHeaders).toPromise();
  }

  get getHeaders(){
    const headerOption = {
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
        "Authorization": this.cookies.get('token')
      })
    }
    return headerOption;
  }

}

