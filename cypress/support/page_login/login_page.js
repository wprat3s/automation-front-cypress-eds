// Classe responsavel por mapear os objetos da paginade login

class login {
    
    element = {
        
        useremail: () => cy.get("#=email"),
    }

    //Metodo de escrita no campo de usuário
    imputCampEmail()
        {
            this.element.useremail().type()
        }

    

}