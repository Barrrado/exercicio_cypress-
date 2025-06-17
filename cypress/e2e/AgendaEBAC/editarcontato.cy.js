///<reference types="cypress"/>

describe("Teste para home", () => {
  it("Deve Editar o  Contato", () => {
    cy.visit("https://agenda-contatos-react.vercel.app");
    cy.get(".edit").first().click();
    cy.get("input[type=text]").clear().type("Fermando");
    cy.get("input[type=email]").clear().type("Fermando07@gmail.com");
    cy.get("input[type=tel]").clear().type("21 99887645");
    cy.get("button[type=submit]").click();
  });
});
