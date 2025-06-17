///<reference types="cypress"/>

describe("Teste para home", () => {
  it("Deve Remover um  Contato", () => {
    cy.visit("https://agenda-contatos-react.vercel.app");
    cy.get(".delete").first().click();
    cy.get(".contato").should("have.length", 2);
  });
});
