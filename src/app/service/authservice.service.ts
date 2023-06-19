import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  isloggedinstatus:boolean=false

  constructor(private _router:Router,private _SnackbarService:SnackbarService) { }

  isautheticated():Promise<boolean>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(localStorage.getItem('token')){
          this.isloggedinstatus = true
        }else{
          this.isloggedinstatus=false
        }
         resolve(this.isloggedinstatus)
      }, 1000);
    })
  }

  statusofisloggedin(){
    return this.isloggedinstatus
  }
   
  logintoapp(username:string,pass:string){
    if(username === 'abc' && pass === 'abc'){
      this.isloggedinstatus=true
     this._router.navigate(['/home'])
     localStorage.setItem('token','jwt-token')
     localStorage.setItem('userrole','user')
     this._SnackbarService.openSnackBar(`Login Successfully`, 'Exit')

    }else{
      this._SnackbarService.openSnackBar(`Enter valid Username & Password`,`Exit`)
      this._router.navigate([''])
    }
 
   
  }

  logoutfromapp(){
    this.isloggedinstatus=false
    localStorage.removeItem('token')
    localStorage.removeItem('userrole')
  }

}
