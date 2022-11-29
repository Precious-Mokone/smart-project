
//============================modules================================
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





//============================components============================
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PostsComponent } from './components/my_posts/posts.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NavComponent } from './components/nav/nav.component';
import { ClientComponent } from './components/client/client.component';
import { RecordsComponent } from './components/records/records.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';
import { AdminComponent } from './components/admin/admin.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { IndicatorsComponent } from './components/admin/indicators/indicators.component';
import { ListComponent } from './components/admin/list/list.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent ,
    DashboardComponent,
    NavbarComponent,
    PostsComponent,
    AttendanceComponent,
    AddUserComponent,
    ViewUsersComponent,
    UserProfileComponent,
    NavComponent,
    ClientComponent,
    RecordsComponent,
    ViewAttendanceComponent,
    AdminComponent,
    SidebarComponent,
    IndicatorsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
