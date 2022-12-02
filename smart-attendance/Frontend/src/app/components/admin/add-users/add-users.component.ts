import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  public isVisible: boolean = false;

  // items = [];
  pageOfItems:any= 3;


  page:number = 1;
  count:number = 0;
  tableSize:number = 6;
  tableSizes:any = [7,14,21,28];


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

      this.path.navigate(['/admin'])
      // alert(user.name + "was added")
      if (this.isVisible) { 
        return;
      } 
      this.isVisible = true;
      setTimeout(()=> this.isVisible = false,2500)

    })
  }

  get validate() {
    return this.registerForm.controls;
  }

  //======================defaults=========================
  constructor(private auth:AuthService,private path:Router,public fb:FormBuilder) { }

  ngOnInit(): void {



    // this.auth.get_All_Users().subscribe((messages) => {
    //   this.usersList = messages
    //   console.log('from database services',messages)
    //   this.dtTrigger.next(this.usersList)
    // });
    // this.auth.get_All_Users().subscribe((messages) => {
    //   this.usersList = messages
    //   console.log('from database services',messages)
    //   this.dtTrigger.next(this.usersList)
    // })

    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   lengthMenu : [5, 10, 15],
    //   processing: true
    //  };
    this.registerForm = this.fb.group({
      name2: ['', [Validators.required,Validators.minLength(3)]],
      surname: ['', [Validators.required,Validators.minLength(2)]],
      contacts: ['', [Validators.required,Validators.minLength(10)]],
      usertype: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      department: ['', [Validators.required,Validators.minLength(3)]],
      empId: ['', [Validators.required,Validators.minLength(3)]],
    
    });


    
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

  //   onTableDataChange(event:any){
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
