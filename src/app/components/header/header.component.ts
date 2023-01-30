import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService:UserServiceService, private router:Router){}

  estado = localStorage.getItem("estado");
  estadores= false;
  

  logout(){

    this.userService.logout()
    .then( ()=>{
      this.router.navigate(['login']);
    }

    )
    .catch(error => console.log(error))

  }

}
