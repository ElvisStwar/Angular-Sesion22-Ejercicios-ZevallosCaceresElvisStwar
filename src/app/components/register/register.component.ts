import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  formRegister!:FormGroup

  constructor(

    private userService:UserServiceService,
    private router:Router
  ){

    this.formRegister = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })

  }

  ngOnInit(): void {
      
  }


  onSubmit(){
    console.log(this.formRegister.value)

    this.userService.registerUser(this.formRegister.value)
    .then( response =>{
      console.log(response)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registrado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.userService.logout()
      this.router.navigate(["login"])
    })
    .catch( error => {
      console.log(error)

      Swal.fire({
        title: 'Upss :c ...',
        icon: 'info',
        text: 'Llena los campos correctamente',
        confirmButtonText: 'ok',
      })


    })

  }

}
