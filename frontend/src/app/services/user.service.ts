import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url:string;

  constructor( private http:HttpClient ) {
    this.url = Global.url;
   }

  signUp(loginUser, getHash=null){
    //console.log("Metodo desde el Servicio de Usuario");
    if(getHash != null){
      loginUser.getHash = getHash;
    }

    let params = JSON.stringify(loginUser);
    
    let headers = new HttpHeaders({'Content-type':'application/json'});
    
   return this.http.post(this.url + 'login',params,{headers}).pipe(
      map(res => res)
    );
  }
}
