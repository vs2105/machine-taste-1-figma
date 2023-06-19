import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 inputtype :string ='password'
icon : string = 'visibility_off'

ishavingaccount:boolean=true
loginform!:FormGroup

  constructor(private _authserviceService:AuthserviceService,
    private _router:Router,) { }

  ngOnInit(): void {
    this.loginform=new FormGroup({
      username:new FormControl(null,[Validators.required])
    })
  }
   
  
  onLogin(username:HTMLInputElement,pass:HTMLInputElement){
    
    this._authserviceService.logintoapp(username.value,pass.value)
    }

    onvisible(){
      // console.log('hii');
      
    //  if(this.inputtype === 'password'){
    //   this.inputtype='Text'
    //  }else{
    //    this.inputtype = 'password'
    //  }

    this.inputtype === 'password' ? this.inputtype = 'text' : this.inputtype ='password'
    this.icon ==='visibility_off' ? this.icon = 'visibility' : this.icon = 'visibility_off'
   

    }


    get getusernamecontrol(){
      return this.loginform.get('username') as FormControl
     }
   

}


