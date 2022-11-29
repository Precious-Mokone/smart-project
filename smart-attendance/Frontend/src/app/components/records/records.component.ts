import { Component, OnInit } from '@angular/core';
import { DashService } from 'src/app/services/dashboard/dash.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  data:any;
  constructor(private service:DashService) { }

  ngOnInit(): void {
    this.service.get_attendance().subscribe((records)=>{
      this.data=records
      //console.log(records)
    })
  
  }

}

