import { Injectable } from '@angular/core';

import{HttpClient, HttpParams}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpclient:HttpClient,) { }

  //API url
  readonly db_url='http://localhost:8080/v1/user/';

  //fetch all users friom db
  getAllUsers() : any{
    return this.httpclient.get(this.db_url);
  }

  getUserById(id : string) : any{
    return this.httpclient.get(this.db_url+'/'+id);
  }

  addUser(user : any) : any{
    return this.httpclient.post(this.db_url,user)
  }

  updateUser(user : any,id : string) : any{
    return this.httpclient.put(`${this.db_url+'/'+id}`,user);
  }

  deleteUser(id : string) : any{
    return this.httpclient.delete(`${this.db_url+'/'+id}`);
  }

}
