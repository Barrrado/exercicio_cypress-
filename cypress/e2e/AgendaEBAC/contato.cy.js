///<reference types="cypress"/>

describe("Teste para home", () => {
  it("Deve Adicionar um  Contato", () => {
    cy.visit("https://agenda-contatos-react.vercel.app");
    cy.get("input[type=text]").type("Diego Barrado");
    cy.get("input[type=email]").type("Diego@gmail.com");
    cy.get("input[type=tel]").type("21 971914179");
    cy.get("button[type=submit]").click();
    cy.get(".contato").should("have.length", 2);
  });
});
