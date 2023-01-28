import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin!:FormGroup;

  constructor( 
    private userService:UserServiceService,
    private router:Router
    ){

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })


  }

  ngOnInit(): void {
      
  }


  onSubmit(){
    this.userService.login(this.formLogin.value)
    .then(
      response => {
        console.log(response)
        this.router.navigate(["home"])
      }

    )
    .catch(
      error => console.log(error)
    )
  }
}
