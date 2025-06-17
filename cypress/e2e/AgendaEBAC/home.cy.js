///<reference types="cypress"/>

describe("Teste para home", () => {
  it("Deve renderizar 3 contatos", () => {
    cy.visit("https://agenda-contatos-react.vercel.app");
  });
});
