import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { cliente } from '../../models/clientes';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormComponent],
  providers: [ClienteService],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  btnAcao = "Cadastrar"
  btnTitulo = "Cadastrar Novo Cliente"

  constructor(private clienteService: ClienteService, private router: Router){

  }


  createCliente(cliente: Omit<cliente, 'id'>): void{
    this.clienteService.criarCliente(cliente).subscribe((data) => {
      this.router.navigate(['/home'])
    })
  }
}
