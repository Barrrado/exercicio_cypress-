///<reference types="cypress"/>

describe("Teste para home", () => {
  it("Deve Remover um  Contato", () => {
    cy.visit("https://agenda-contatos-react.vercel.app");
    cy.wait(1000);
    cy.get(".delete").first().click();
    cy.on("window:confirm", () => true);
    cy.wait(1000);
    cy.contains("Nome do Contato").should("not.exist");
  });
});
