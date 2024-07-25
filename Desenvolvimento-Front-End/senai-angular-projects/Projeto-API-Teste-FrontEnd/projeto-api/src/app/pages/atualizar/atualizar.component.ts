import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { cliente } from '../../models/clientes';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-atualizar',
  standalone: true,
  imports: [FormComponent, NgIf],
  providers: [ClienteService],
  templateUrl: './atualizar.component.html',
  styleUrl: './atualizar.component.scss'
})
export class AtualizarComponent implements OnInit {

  btnAcao: string = "Editar"
  btnTitulo : string = "Editar cliente"
  cliente! : cliente

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if( id !== null){
      this.clienteService.obterClienteById(id).subscribe((data) => {
        this.cliente = data
      })
    } else{
      console.error('Id do cliente não fornecido na rota')
    }

  }

  editarCliente(cliente: cliente){
    this.clienteService.editarCliente(cliente).subscribe((data) => {
      this.router.navigate(["/home"])
    })
  }

}
