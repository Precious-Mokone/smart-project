import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { DashService } from 'src/app/services/dashboard/dash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  

  //=========================================properties==================================
// postForm:UntypedFormGroup = new UntypedFormGroup({
//   title:new UntypedFormControl(),
//   post:new UntypedFormControl(),
// })
postForm:UntypedFormGroup = new UntypedFormGroup({
    name:new UntypedFormControl(),
    post:new UntypedFormControl(),
    timein:new UntypedFormControl(),
    status:new UntypedFormControl(),
    department:new UntypedFormControl(),
    date:new UntypedFormControl(),
  })


userID:any = localStorage.getItem('user_id');


//============================================methods======================================

set_postForm()
{

  //DatePipe = Date.now();
  //timein: Date = new Date();

  const attendance ={
    user_id:this.userID,
    name:this.postForm.value.post,
    status:this.postForm.value.post,
    timein:Date(),
    department:"Fullstack",
    date:Date()
    }

    console.log(attendance)
  // const post ={

    

  //   user_id:this.userID,
  //   title:this.postForm.value.title,
  //   post:this.postForm.value.post,
  //   post_date:Date()
  //   }

   

    //console.log(post)

  this.dash.set_post(attendance).subscribe((message)=>{
      console.table(message)    
  })

  
    
}


  //=================================Save attendance data from backend===================================
  userDetails: any
  
  
  

 //====================================================================
  edtStatus: any = false
  indeX: any
  edtedPost: any
  edtTitle: any
  // btnClcked="false"

  editForm: UntypedFormGroup = new UntypedFormGroup({
  title: new UntypedFormControl(),
  post: new UntypedFormControl()

  })


//==============================================default methods==============================
  constructor(private dash:DashService, private path: Router, private router: Router,
    private route: ActivatedRoute) { }

  

  ngOnInit(): void {
 //=================================Fetch data and save in attendance===================================
    this.dash.get_user().subscribe((messages) => {
      this.userDetails = messages

      console.log("this are messages" ,messages)
    })
    
  }

  

}
