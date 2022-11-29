import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const userID= localStorage.getItem('user_id')


@Injectable({
  providedIn: 'root'
})
export class DashService {
  baseUrl ='http://localhost:5050/users/'
  

  constructor(private http:HttpClient) { }


  set_post(post:any)
  {
     return this.http.post(`${this.baseUrl}/createPost`,post)
  }

  get_post(){

    return this.http.get(`${this.baseUrl}/getPost/${userID}`)
  }

  get_attendance(){
    return this.http.get(`${this.baseUrl}/getAttendance/${userID}`)
  }



  delete_post(postBody:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/deletePost`,postBody)
  }

  edit_post(editBody:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/editPost`,editBody)
  }

  ///GET USER DETAILS
  get_user(){
    return this.http.get(`${this.baseUrl}/getUser/${userID}`)
  }


  //create atten
post_attendance(editBody:any){
  return this.http.post(`${this.baseUrl}/createAttendance`,editBody)
}
get_All(){
  return this.http.get(`${this.baseUrl}/getAll`)
}

}
