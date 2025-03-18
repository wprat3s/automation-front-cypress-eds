/*const { produto} = require("../support/cadastrar_produto/produto")
describe ('Teste para cadastrar produtos',()=>{
    it ('Produto cadastrado com sucesso', ()=>{

        cy.visit('/');
        cy.get('[data-testid="cadastrar-produtos"]').click();
        cy.get('[data-testid="nome"]').type("Notebook Dell");
        cy.get('[data-testid="preco"]').type('5000');
        cy.get('[data-testid="descricao"]').type("Note book Dell 8ª geração");
        cy.get('[data-testid="quantity"]').type('15')
        cy.get('[data-testid="imagem"]').selectFile("C:\Users\william.prates\OneDrive - WIZ SOLUCOES E CORRETAGEM DE SEGUROS\Desktop\Imagens GitHub")
        cy.get('[data-testid="cadastarProdutos"]').click()
        

    })
})*/

const { login } = require("../support/page_login/login_page");
const { cadastro } = require("../support/cadastro/cadastrar_usuario");
const { produto } = require("../support/produto/cadastrar_produto")

describe('Teste de Cadastro de Produto', () => {
    before(() => {
        cy.visit('/');
        cy.get('[data-testid="email"]').type("williamteste1@teste.com");
        cy.get('[data-testid="senha"]').type('@Teste123');
        cy.get('[data-testid="entrar"]').click();
 
    });

   /* it('Deve cadastrar um produto com sucesso', () => {
        cy.contains('Cadastrar Produtos').click();
        produto.cadastrarProduto('Produto Teste', '50', 'Descrição do produto', '10', 'imagem_teste.jpg');
    });*/

    it ('Deve executar o login com sucesso',()=>{
        
        cy.get('[data-testid="cadastrar-produtos"]').click();
        cy.get('[data-testid="nome"]').type("Produto para teste automação");
        cy.get('[data-testid="preco"]').type('1500');
        cy.get('[data-testid="descricao"]').type("Produto de teste que não existe");
        cy.get('[data-testid="quantity"]').type('200');
        cy.get('[data-testid="imagem"]').click().selectFile('cypress/fixtures/Imagem/Imagem 1.png');
    const arquivo = 'imagem/imagem 2.png'
        cy.get('[data-testid="cadastarProdutos"]').click()

       // login.login_page('teste@teste.com','123456');
    })
});
