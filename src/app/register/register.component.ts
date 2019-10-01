import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../service/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passworderror:string;
  registerFormGroup:FormGroup;
  constructor(private fb:FormBuilder,private loginService:LoginService,private _snackbar:MatSnackBar,private route:Router,
    private cookies:CookieService) { }

  ngOnInit() {
    const mobileNumberReg = RegExp(/[0-9\+\-\ ]/);
    this.registerFormGroup = this.fb.group({
      userName:["",[Validators.required,Validators.minLength(3)]],
      email:["",[Validators.required,Validators.email]],
      mobileNo:["",[Validators.required,Validators.pattern(mobileNumberReg)]],
      password:["",[Validators.required,Validators.minLength(8)]]
    })
  }

  onSubmit(values){
    this.loginService.registerUser(values).toPromise().then(d=>{
      if(d["token"]){
        this.cookies.set("token",d["token"]);
          this.route.navigate(['/'])
          console.log(d)
      }else{
        this.passworderror = "user is already exist";
        console.log("user is already exist");
      }
    }).catch((err)=>console.log(err));
  }
}
