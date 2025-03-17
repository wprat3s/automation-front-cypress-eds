// Classe responsável por mapear os objetos da página de login


class login {
   element = {

    userEmail: () => cy.get("#=email"),
    userPassword: () => cy.get("#=password"),
    submitButton: () => cy.get
   }

    // Método para preencher o campo de e-mail
    inputEmail(email) {
        this.element.userEmail().type(email)
   
}