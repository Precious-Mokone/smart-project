import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // items = [];
  pageOfItems:any= 3;

  // items = [];
  // pageOfItems: Array<any>;

 
  //======================properties=======================
  registerForm:UntypedFormGroup = new UntypedFormGroup({
    name2: new UntypedFormControl(),
    surname: new UntypedFormControl(),
    contacts: new UntypedFormControl(),
    department: new UntypedFormControl(),
    empId: new UntypedFormControl(),
    email: new UntypedFormControl(),
    password: new UntypedFormControl(),
    confrimPass: new UntypedFormControl()
    // email: new UntypedFormControl(),
    // password: new UntypedFormControl(),
    // ConfirmPassword: new UntypedFormControl()
  })

  user_data:any

  usersList:any

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  //======================methods==========================

  set_registerForm(){

     const user = {
       name:this.registerForm.value.name2,
       surname:this.registerForm.value.surname,
       contacts:this.registerForm.value.contacts,
       email:this.registerForm.value.email,
       password:this.registerForm.value.password,
       department:this.registerForm.value.department,
       usertype:"client"
     }


     console.table(user)

    
    this.auth.set_employee(user).subscribe((my_data)=>{
      console.log("From the Service",my_data)

      this.path.navigate(['/viewusers'])
      alert(user.name + "was added")

    })
  }

  

  //======================defaults=========================
  constructor(private auth:AuthService,private path:Router) { }

  ngOnInit(): void {



    // this.auth.get_All_Users().subscribe((messages) => {
    //   this.usersList = messages
    //   console.log('from database services',messages)
    //   this.dtTrigger.next(this.usersList)
    // });
    this.auth.get_All_Users().subscribe((messages) => {
      this.usersList = messages
      console.log('from database services',messages)
      this.dtTrigger.next(this.usersList)
    })

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 15],
      processing: true
     };
    
  }

  // ngOnInit(): void {

  //   this.bookingService.GetList().subscribe((res:any) => {
  //     this.bookings = res;

  //     this.dtTrigger.next(this.bookings);
  //     // let result = res;
  //     // this.bookings = result.filter(ress => ress.id === 3)

  //   });

  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 5,
  //     lengthMenu : [5, 10, 25],
  //     processing: true
  //    };

  // }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



  

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
