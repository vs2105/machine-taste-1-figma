import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  constructor(private _authserviceService:AuthserviceService,
    private _router:Router, private _snackbarService:SnackbarService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean >| Promise<boolean > {
     return this._authserviceService.isautheticated()
       .then((isauth:boolean)=>{
        if(isauth=== true){
          return true
        }else{
          this._snackbarService.openSnackBar(`plz login`,`exit`)
          this._router.navigate([''])
          return false
        }
       })
  }
}
