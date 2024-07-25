import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';

// run: json-server --watch dbgames.json
@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private url = "http://localhost:3000/produtos";
  
  constructor(private _httpClient: HttpClient) { }

  getProduto(id: any): Observable<Produto> {
    // Converta o ID para número, se necessário
    const idNumero = typeof id === 'string' ? parseInt(id, 10) : id;
    // const idString = typeof id === 'number' ? id.toString() : id;
  
    const urlProduto = `${this.url}?id=${idNumero}`;
    return this._httpClient.get<Produto>(urlProduto);
  }
  

  // getProduto(id:any): Observable<Produto> {
  //   const urlAtualizar = `${this.url}?id=${id}`;
  //   return this._httpClient.get<Produto>(urlAtualizar);
  // }

  // getProduto(id: any): Observable<Produto> {
  //   const urlProduto = `${this.url}/${id}`;
  //   return this._httpClient.get<Produto>(urlProduto);
  // }

  getProdutos(): Observable<Produto[]> {
    return this._httpClient.get<Produto[]>(this.url);
  }

  cadastrarProduto(produto: Produto): Observable<Produto[]> {
    // Converta o ID para string, se necessário
    const produtoComIdString = {
      ...produto,
      id: typeof produto.id === 'number' ? produto.id.toString() : produto.id
    };
  
    return this._httpClient.post<Produto[]>(this.url, produtoComIdString);
  }
  

  // cadastrarProduto(produto: Produto): Observable<Produto[]> {
  //   // Removi o "id" do produto antes de enviar a requisição POST, tava dando erro. Id zerado
  //   // const { id, ...produtoSemId } = produto;
  //   return this._httpClient.post<Produto[]>(this.url, produto);
  // }

  atualizarProduto(id: any, produto: Produto): Observable<Produto[]> {
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<Produto[]>(urlAtualizar, produto);
  }
  removerProduto(id: any): Observable<Produto[]> {
    const urlDeletar = `${this.url}/${id}`;
    return this._httpClient.delete<Produto[]>(urlDeletar);
  }
}
