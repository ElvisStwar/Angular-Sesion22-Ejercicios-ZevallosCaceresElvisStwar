import { Component, OnInit } from '@angular/core';
import { Ferreteria } from 'src/app/interfaces/ferreteria';
import { FerreteriaService } from 'src/app/service/ferreteria.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  ferreteria!:Ferreteria[]


  constructor(private ferreteriaService:FerreteriaService){

  }

  ngOnInit(): void {

    this.ferreteriaService.getFerreteria().subscribe(Ferreteria => {
      this.ferreteria = Ferreteria
    })
  }
    
  onClickDelete(ferreteria:Ferreteria){

    const response=this.ferreteriaService.deleteFerreteria(ferreteria)
    console.log(response)

  } 



}
