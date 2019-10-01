import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  public productGroup:FormGroup;
  constructor(private productService:ProductService,private fb:FormBuilder,private auth:AuthService,private route:Router) { }

  ngOnInit() {
    this.productGroup = this.fb.group({
      "profileImage":[null,Validators.required],
      "headerName":[null,[Validators.required,Validators.minLength(4)]],
      "subHeaderName":[null,[Validators.required,Validators.minLength(4)]],
      "image":[null,Validators.required],
      "desc":[null,Validators.required],
      "likes":[null]
    })
    this.productService.getAllProducts().then(data=>{
      this.products = data as [];
    })
  }

  profileImage(event){
    let file = new FileReader();
    file.onload = (e)=>{
      this.productGroup.controls["profileImage"].setValue(e.target["result"]);
    }
    file.readAsDataURL(event.target.files[0])
  }

  image(event){
    let file = new FileReader();
    file.onload = (e)=>{
      this.productGroup.controls["image"].setValue(e.target["result"]);
    }
    file.readAsDataURL(event.target.files[0])
  }

  onSubmit(values){
    this.productService.saveProduct(values).toPromise()
    .then(data=>{
      this.products.push(data);
      this.productGroup.reset();
    })
    .catch(err=>console.log(err))
  }
  
  likePage(id,like){
    this.productService.updateProduct(id,Number(like)).then(d=>{
      this.products.filter(data =>{
        if(data._id == id){
          data.likes = Number(like)+1
        }
      })
    })
  }
  deleteproduct(id,i){
    this.productService.delete(id).then(data=>{
      if(data){
        this.products.splice(i,1);
      }
    });
  }

  logout(){
    this.auth.logout();
    this.route.navigate(['/login'])
  }

}
