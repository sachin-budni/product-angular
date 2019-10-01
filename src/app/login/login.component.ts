import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passworderror:string;
  loginFormGroup:FormGroup;
  constructor(private fb:FormBuilder,private loginService:LoginService,private router:Router,private cookies:CookieService) { }

  ngOnInit() {
    const mobileNumberReg = RegExp(/[0-9\+\-\ ]/);
    this.loginFormGroup = this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(8)]]
    })
  }
  onSubmit(value){
    this.loginService.loginPost(value).toPromise().then(data=>{
      if(data['mes']){
        this.cookies.set("token",data["token"]);
        this.router.navigate(['/'])
        console.log(data)
      }else{
        this.passworderror = data["err"];
        // console.error(data)
      }
    })
  }

}
