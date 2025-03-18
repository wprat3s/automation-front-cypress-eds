/*// Classe responsável por mapear os objetos da página de cadastro
/// <reference types="cypress"/>


class produto {
    
    get #userNomeProduto() {return cy.get("#produto")}
    get #userPreco() {return cy.get("#=preco")}
    get #userDescricao() {return cy.get("#=descricao")}
    get #userQtde() {return cy.get("#qtde")}
    get #submitbutton() {return cy.get('[data-testid="imagem"]')
    get #submitButton() {return ccy.get('[data-testid="cadastarProdutos"]')}

    // Método para preencher o campo de e-mail
    inputEmail(nome,email,password) 
    {
        this.#userNomeProduto().type(produto),
        this.#userPreco().type(preco),
        this.#userDescricao().type(descricao),
        this.#submitButton().click();

    }  

}
module.exports = new produto();*/
/// <reference types="cypress"/>

class Produto {
    get #nome() { return cy.get('[data-testid="nome"]'); }
    get #preco() { return cy.get('[data-testid="preco"]'); }
    get #descricao() { return cy.get('[data-testid="descricao"]'); }
    get #quantidade() { return cy.get('[data-testid="quantidade"]'); }
    get #inputImagem() { return cy.get('input[type="file"]'); }
    get #botaoCadastrar() { return cy.contains('button', 'Cadastrar'); }

    cadastrarProduto(nome, preco, descricao, quantidade, imagem) {
        this.#nome.type(nome);
        this.#preco.type(preco);
        this.#descricao.type(descricao);
        this.#quantidade.type(quantidade);

        if (imagem) {
            this.#inputImagem.attachFile(imagem);
        }

        this.#botaoCadastrar.click();
        cy.contains('Produto cadastrado com sucesso').should('be.visible');
    }
}

module.exports = new Produto();
