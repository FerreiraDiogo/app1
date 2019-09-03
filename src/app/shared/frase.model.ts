export default class Frase {

    //o "public antes dos parâmetros do construtor serve para declarar as variáveis"
    //eliminando a necessidade de declara-las antes do construtor, tornando o código
    //menos verboso.    
    constructor(public fraseEng: String, public frasePt: String) {
        this.fraseEng = fraseEng;
        this.frasePt = frasePt;
    }


}