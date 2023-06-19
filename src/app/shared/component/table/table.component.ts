import { Component, OnInit, ViewChild } from '@angular/core';
import { TableService } from 'src/app/service/table.service';
import { Itable } from '../../model/users.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
   tableArray:Array<Itable>=[]
   dataSource:MatTableDataSource<Itable>=new MatTableDataSource<Itable>()
   displayedColumns: string[] = ['TransactionCode', 'Name', 'InvestAmount','Option'];
   @ViewChild('paginator1')
  paginator!: MatPaginator;
  constructor(private _tableService:TableService) { }

  ngOnInit(): void {
    this._tableService.gettabledata()
     

     .subscribe(
      ((res:any)=>{
        console.log((res));
       this.tableArray=res 
       this.dataSource=new MatTableDataSource(res)
       this.dataSource.paginator=this.paginator
      })
     )
    //  this.dataSource.paginator = this.paginator;

  }

  onclick(eve:any){
   this.dataSource.filter= eve.target.value;
  //  console.log(eve.target.value);
   
  }
  
}
