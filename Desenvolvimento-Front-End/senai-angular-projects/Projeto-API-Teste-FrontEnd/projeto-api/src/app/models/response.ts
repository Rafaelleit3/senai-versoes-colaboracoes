export interface Response<T>{
    dados : T;
    mensagem: String;
    sucesso: boolean;
}