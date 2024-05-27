import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, ɵNgNoValidate } from '@angular/forms';
import { cliente } from '../../models/clientes';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers: [ClienteService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<cliente>()
  @Input() btnAcao! : string
  @Input() btnTitulo! : string
  @Input() dadosCliente : cliente | null = null

  clienteForm! : FormGroup

  constructor(){}

  ngOnInit(): void {
    
    this.clienteForm = new FormGroup({
      id: new FormControl( this.dadosCliente ? this.dadosCliente.id : 0, [Validators.required]),
      nome: new FormControl( this.dadosCliente ? this.dadosCliente.nome : '', [Validators.required]),
      endereco: new FormControl(this.dadosCliente ? this.dadosCliente.endereco : '', [Validators.required])
    });
  }

  submit(){
    this.onSubmit.emit(this.clienteForm.value);
  }

}
