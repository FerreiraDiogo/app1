export default class Coracao {

    constructor(
        public cheio: boolean,
        public coracaoCheio: String = "/assets/coracao_cheio.png",
        public coracaoVazio: String = "/assets/coracao_vazio.png"
    ) {

    }

    exibeCoracoes(): String {
        if (this.cheio == true) {
            return this.coracaoCheio;
        } else {
            return this.coracaoVazio;
        }
    }

}