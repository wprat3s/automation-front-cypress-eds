const { cadastro } = require("../support/cadastro/cadastrar_usuario")
describe ('Teste de cadastro',()=>{
    it ('Deve executar o cadastro de usuário com sucesso',()=>{
        

        cy.visit('/');
        cy.screenshot('Página inicial')
        cy.get('[data-testid="cadastrar"]').click();
        cy.get('[data-testid="nome"]').type("William Teste2");
        cy.get('[data-testid="email"]').type("testettttttttt@gmail.com");
        cy.get('[data-testid="password"]').type(123456);
        cy.get('[data-testid="checkbox"]').click();
        cy.get('[data-testid="cadastrar"]').click()

       // login.login_page('teste@teste.com','123456');

    })
})