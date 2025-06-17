///<reference types="cypress"/>

describe("Teste para home", () => {
  it("Deve Adicionar um  Contato", () => {
    cy.visit("https://agenda-contatos-react.vercel.app");
    cy.wait(1000);
    cy.get("input[type=text]").type("Diego Barrado");
    cy.get("input[type=email]").type("Diego@gmail.com");
    cy.get("input[type=tel]").type("21 971914179");
    cy.get("button[type=submit]").click();

    cy.contains("Diego Barrado").should("exist");
    cy.contains("Diego@gmail.com").should("exist");
    cy.contains("21 971914179").should("exist");
  });
});
