import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseurl="https://routeegypt.herokuapp.com/"
  constructor(private _HttpClient:HttpClient) { }
  signup(data):Observable <any>
  {

return this._HttpClient.post(this.baseurl+"signup",data)

  }

  signin(data):Observable <any>{

    return this._HttpClient.post(this.baseurl+"signin",data)
    
      }

      signout(data):Observable <any>{

    return    this._HttpClient.post(this.baseurl+"signout",data)
        
          }

}
