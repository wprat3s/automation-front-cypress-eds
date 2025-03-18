describe('Teste ignorando SSL', () => {
    it('Deve acessar o site mesmo com erro de certificado', () => {
      cy.visit('https://front.serverest.dev', { failOnStatusCode: false });
    });
  });
  