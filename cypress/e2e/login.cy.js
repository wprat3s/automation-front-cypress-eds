const { login } = require("../support/page_login/login_page")
describe ('Teste de login',()=>{
    it ('Deve executar o login com sucesso',()=>{
        

        cy.visit('/');

       // login.login_page('teste@teste.com','123456');

    })
})