import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService:UserServiceService, private router:Router){}

  alerta(){

    if(localStorage.getItem('status')=='logIn'){
      Swal.fire({
        title: '¿Está seguro de cerrar sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.logout()
        }
      })
    }
  }

  logout(){

    this.userService.logout()
    .then( ()=>{
      this.router.navigate(['login']);
      localStorage.setItem('status','logOut')
    }

    )
    .catch(error => console.log(error))

  }

}
