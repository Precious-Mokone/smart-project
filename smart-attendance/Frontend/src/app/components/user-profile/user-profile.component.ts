import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  


 
  //======================properties=======================
  registerForm:UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl(),
    surname: new UntypedFormControl(),
    contacts: new UntypedFormControl(),
    email: new UntypedFormControl(),
    password: new UntypedFormControl(),
    // ConfirmPassword: new UntypedFormControl()
    // email: new UntypedFormControl(),
    // password: new UntypedFormControl(),
    // ConfirmPassword: new UntypedFormControl()
  })

  user_data:any

  usersList:any

  //======================methods==========================

  set_registerForm(){

     const user = {
       name:this.registerForm.value.name,
       surname:this.registerForm.value.surname,
       contacts:this.registerForm.value.contacts,
       email:this.registerForm.value.email,
       password:this.registerForm.value.password,
       //ConfirmPassword:this.registerForm.value.ConfirmPassword
     }


     console.table(user)

    
    this.auth.set_employee(user).subscribe((my_data)=>{
      console.log("From the Service",my_data)

      this.path.navigate(['/viewusers'])

    })
  }

  

  //======================defaults=========================
  constructor(private auth:AuthService,private path:Router) { }

  ngOnInit(): void {

    this.auth.get_All_Users().subscribe((messages) => {
      this.usersList = messages
      console.log('from database services',messages)
    })
  }
}

