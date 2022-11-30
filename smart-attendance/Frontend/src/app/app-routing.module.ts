import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostsComponent } from './components/my_posts/posts.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ClientComponent } from './components/client/client.component';
import { RecordsComponent } from './components/records/records.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:RegisterComponent},
  {path:"dash",component:DashboardComponent},
  {path:"post",component:PostsComponent},
  {path:"adduser",component:AddUserComponent},
  {path:"viewusers",component:ViewUsersComponent},
  {path:"Profile",component:UserProfileComponent},
  {path:"client",component:ClientComponent},
  {path:"records",component:RecordsComponent},
 
  //{path:"admin",component:ViewAttendanceComponent},
  {path:"admin",component:AdminComponent}
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
