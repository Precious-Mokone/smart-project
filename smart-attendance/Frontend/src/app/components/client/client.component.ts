import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ActivatedRoute} from '@angular/router';
import { DashService } from 'src/app/services/dashboard/dash.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
 //=========================================properties==================================
// postForm:UntypedFormGroup = new UntypedFormGroup({
//   title:new UntypedFormControl(),
//   post:new UntypedFormControl(),
// })
postForm:UntypedFormGroup = new UntypedFormGroup({
  // name:new UntypedFormControl(),
  // post:new UntypedFormControl(),
  // timein:new UntypedFormControl(),
  status:new UntypedFormControl(),
  reason:new UntypedFormControl(),
  // date:new UntypedFormControl(),
  
})


userID:any = localStorage.getItem('user_id');
test:String = "";

name1:any = localStorage.getItem('name');
surname1:any = localStorage.getItem('surname');
email1:any = localStorage.getItem('name');
department1 = localStorage.getItem('department')

    logn:any = {
      name:this.name1,
      surname:this.surname1,
      email:this.email1,

    }

    

//============================================methods======================================

set_postForm()
{

//DatePipe = Date.now();
//timein: Date = new Date();

const attendance ={
  user_id:this.userID,
  name:this.name1,//fetch
  status:this.postForm.value.status,//enter
  department:this.department1,
  reason:this.postForm.value.reason,
  date:Date(),
  }

  console.log("attendance",attendance)
// const post ={

  

//   user_id:this.userID,
//   title:this.postForm.value.title,
//   post:this.postForm.value.post,
//   post_date:Date()
//   }

 

  //console.log(post)

// this.dash.set_post(attendance).subscribe((message)=>{
//     console.table(message)    
// })

//call service
if(this.postForm.value.status==="Present"){


this.dash.post_attendance(attendance).subscribe(()=>{
  console.log("succesfull")
  this.path.navigate(['/records'])
})


}
else{
  if(this.postForm.value.reson === !""){
    alert("add reason")
  }
  else{
    this.dash.post_attendance(attendance).subscribe(()=>{
      console.log("succesfull")
      this.path.navigate(['/records'])
    })
  }
}










  
}


//=================================Save attendance data from backend===================================
userDetails: any



user:any

  isShown: boolean = false;

// name1:any
// surname1:string = '';
// email1:string = '';
// //token :string = ''
  


token:any = localStorage.getItem('token');



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

    var token= localStorage.getItem('token');

  })
  console.log("this is logn data",this.logn)

  this.isShown = false;
}

toggleShow() {
  this.isShown = ! this.isShown;
}

}
