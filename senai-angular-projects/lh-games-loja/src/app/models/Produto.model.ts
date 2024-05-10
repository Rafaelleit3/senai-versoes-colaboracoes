export class Produto{
    id: number | string = 0;
    produto: string = "";
    descricao: string = "";
    foto: string = "";
    preco: number = 0;

    constructor(id: number | string, produto: string, descricao: string, foto:string, preco: number){
        this.id = id;
        this.produto = produto;
        this.descricao = descricao;
        this.foto = foto;
        this.preco =preco;
    }
}