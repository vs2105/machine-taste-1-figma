import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private _authserviceService:AuthserviceService,
    private _router:Router) { }

  ngOnInit(): void {
  }

  onlogout(){
    this._router.navigate([''])
   this._authserviceService.logoutfromapp()
 
  }

}
