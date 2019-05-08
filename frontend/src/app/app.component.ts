import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public user: User;

  constructor(
    private userService:UserService
  ){
    this.user = new User("","","","","","");
  }
   
  public test(){
    console.log("Se ejecuto el metodo con exito");
  }

  public onSubmit(){
    //console.log(this.user);
    this.userService.signUp();
  }

}
