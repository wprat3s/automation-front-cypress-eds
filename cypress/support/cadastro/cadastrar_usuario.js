
// Classe responsável por mapear os objetos da página de login
/// <reference types="cypress"/>


class cadastro {
    
        get #userNome() {return cy.get("#nome")}
        get #userEmail() {return cy.get("#=email")}
        get #userPassword() {return cy.get("#=password")}
        get #submitButton() {return cy.get('[data-testid="cadastrar"]')}
    
        

        // Método para preencher o campo de e-mail
        inputEmail(nome,email,password) 
        {
            this.#userNome().type(nome),
            this.#userEmail().type(email),
            this.#userPassword().type(password),
            this.#submitButton().click();
    
        }  

}
module.exports = new cadastro();