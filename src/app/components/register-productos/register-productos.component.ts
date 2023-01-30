import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FerreteriaService } from 'src/app/service/ferreteria.service';

@Component({
  selector: 'app-register-productos',
  templateUrl: './register-productos.component.html',
  styleUrls: ['./register-productos.component.css']
})
export class RegisterProductosComponent {

  formProductos!:FormGroup;

  constructor(private ferreteriaData:FerreteriaService, private router:Router){

    this.formProductos = new FormGroup({
      producto: new FormControl(),
      precio: new FormControl(),
      foto: new FormControl()
    })
  }

  async onSubmit(){
    console.log(this.formProductos.value)
    console.log('--------------------------')
    const response = this.ferreteriaData.addProducto(this.formProductos.value)
    console.log(response)
    this.router.navigate(["lista"])
  }

}
