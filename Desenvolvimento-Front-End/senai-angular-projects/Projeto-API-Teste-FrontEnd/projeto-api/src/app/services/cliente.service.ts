import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap, take } from 'rxjs';
import { cliente } from '../models/clientes';
import { Response } from '../models/response';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = `${environment.apiUrl}/clientes`

  constructor(private http: HttpClient) { }

  obterClientes(){
    return this.http.get<cliente[]>(this.apiUrl);
  }

  criarCliente(cliente: cliente){
    return this.obterClientes().pipe(
      take(1),
      // map(clientes => clientes.filter(c => c.id !== undefined)),
      switchMap(clientes => {
        const maiorId = Math.max(...clientes.map(c => c.id as number), 0);
        cliente.id = (maiorId + 1).toString();
        return this.http.post<cliente>(this.apiUrl, cliente)
      })
    )
  }

  obterClienteById(id : string){
    // console.log(`${this.apiUrl}/${id}`)
    return this.http.get<cliente>(`${this.apiUrl}/${id}`)
  }

  editarCliente(cliente: cliente){
    return this.http.put<cliente>(`${this.apiUrl}/${cliente.id}`, cliente)
  }

  excluirCliente(id : string | number){
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

}
