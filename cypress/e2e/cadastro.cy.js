const { cadastro } = require("../support/cadastro/cadastrar_usuario")
describe ('Teste de cadastro',()=>{
    it ('Deve executar o cadastro de usuário com sucesso',()=>{
        

        cy.visit('/');
        cy.screenshot('Página inicial')
        cy.get('[data-testid="cadastrar"]').click();
        cy.get('[data-testid="nome"]').type("William Teste2");
        cy.get('[data-testid="email"]').type("williamteste1@teste.com");
        cy.get('[data-testid="password"]').type('@Teste123');
        cy.get('[data-testid="checkbox"]').click();
        cy.get('[data-testid="cadastrar"]').click()

       // login.login_page('teste@teste.com','123456');

    })
})