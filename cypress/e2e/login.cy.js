/*const { loginPage } = require("../support/page_login/login_page");

describe('Teste de login', () => {
    const email = "teste@teste.com";
    const password = "123456";

    beforeEach(() => {
        cy.visit('/');
    });

    it('Deve executar o login com sucesso', () => {
        loginPage.fillLoginForm(email, password);
        
        // Verificação após o login
        cy.url().should('include', '/dashboard'); // Exemplo de verificação de redirecionamento
        cy.get('[data-testid="welcome-message"]').should('be.visible'); // Exemplo de verificação de elemento visível
    });
});*/

const { login } = require("../support/page_login/login_page")
describe ('Teste de login',()=>{
    it ('Deve executar o login com sucesso',()=>{
        

        cy.visit('/');
        cy.get('[data-testid="email"]').type("williamteste1@teste.com");
        cy.get('[data-testid="senha"]').type('@Teste123');
        cy.get('[data-testid="entrar"]').click()

       // login.login_page('teste@teste.com','123456');
    })

})