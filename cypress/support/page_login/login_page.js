// Classe responsável por mapear os objetos da página de login
/// <reference types="cypress"/>


class login {
   
         get #userEmail() {return cy.get("#=email")}
         get #userPassword() {return cy.get("#=password")}
         get #submitButton() {return cy.get('[data-testid="entrar"]')}
       
       
     
         // Método para preencher o campo de e-mail
         inputEmail(email,password) 
         {
             this.#userEmail().type(email),
             this.#userPassword().type(password),
             this.#submitButton().click();
        
         }  
   
}
module.exports = new login();