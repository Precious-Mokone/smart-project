import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  // page:number = 1;
  // count:number = 0;
  // tableSize:number = 10;
  // tableSizes:any = [5,10,15,20];

  // onTableDataChange(event:any){
  //   this.page = event;
  //   this.usersList;
  // }

  // onTableSizeChange(event:any):void{
  //   this.tableSize = event.target.value;
  //   this.page= 1;
  //   this.usersList;
  // }



  // ngOnDestroy(): void {
  //   this.dtTrigger.unsubscribe();
  // }



  

  // onChangePage(pageOfItems: Array<any>) {
  //   // update current page of items
  //   this.pageOfItems = pageOfItems;
  // }

}
