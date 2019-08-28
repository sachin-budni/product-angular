import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headerOption = {
  headers:new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }
  productURL = "http://localhost:5000/products"
  getAllProducts(){
    return this.http.get(this.productURL).toPromise();
  }

  saveProduct(data){
    return this.http.post(this.productURL,data,headerOption);
  }
  updateProduct(id,data){
    return this.http.patch(this.productURL+"/"+id,{likes:data+1},headerOption).toPromise();
  }
  delete(id){
    return this.http.delete((this.productURL+"/"+id),headerOption).toPromise();
  }
}
