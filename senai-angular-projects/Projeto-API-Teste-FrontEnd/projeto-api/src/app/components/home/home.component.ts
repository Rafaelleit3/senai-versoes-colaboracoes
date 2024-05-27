import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { cliente } from '../../models/clientes';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, NgFor, RouterLink],
  providers: [ClienteService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  clientes : cliente[] = []
  clientesGeral: cliente[] = []

  constructor(private clienteService: ClienteService, private router: Router){}

  ngOnInit(): void {
    this.clienteService.obterClientes()
    .subscribe(data => this.clientes = data)
  }

  excluirCliente(id: string | number){
    this.clienteService.excluirCliente(id).subscribe((data) => {
      this.ngOnInit()
    }) 
   
  }

}
