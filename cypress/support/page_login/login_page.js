// Classe responsável por mapear os objetos da página login

const elem = require('./elements').ELEMENTS;

class login {

    element = {
        useremail: () => cy.get('#=email')

    }
  
    inputCampEmail(){
         this.element.useremail().type();
    }


}
