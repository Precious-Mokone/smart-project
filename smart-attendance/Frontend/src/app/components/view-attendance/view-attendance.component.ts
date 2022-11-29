import { Component, OnInit } from '@angular/core';
import { DashService } from 'src/app/services/dashboard/dash.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss']
})
export class ViewAttendanceComponent implements OnInit {
  data:any;
  constructor(private service:DashService) { }

  ngOnInit(): void {
    this.service.get_All().subscribe((view)=>{
      this.data=view
    })
  }

}