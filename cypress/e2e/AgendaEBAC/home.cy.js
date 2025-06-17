///<reference types="cypress"/>

describe("Teste para home", () => {
  it("Deve renderizar 3 contatos", () => {
    cy.visit("https://agenda-contatos-react.vercel.app");
    cy.get(".contato").should("have.length", 3);
  });
});
//   it("Deve Filtrar por Fullstack", () => {
//     cy.visit("https://ebac-jobs-e2e.vercel.app/");
//     cy.get(".FormVagas_campo__E1ppF").type("fullstack");
//     cy.get('button[type="submit"]').click();
//     cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 1);
//     cy.get(".Vaga_vagaLink__DeFkk").first().click();
//   });
// it("Deve levar o Usuario ate o formulario de inscrição", () => {
//   cy.visit("https://ebac-jobs-e2e.vercel.app/");
//   cy.get(".FormVagas_campo__E1ppF").type("fullstack");
//   cy.get('button[type="submit"]').click();
//   cy.get(".ListaVagas_vagas__gmNZn > li").should("have.length", 1);
//   cy.get(".Vaga_vagaLink__DeFkk").first().click();
//   cy.get('input[name="nome-completo"]').type("Diego Barrado");
//   cy.get('input[name="email"]').type("diego.barrado07@gmail.com");
//   cy.get('input[name="telefone"]').type("21 971914179");
//   cy.get('input[name="endereco"]').type(
//     "Rua teste, bairro cypress, rio de jeniro-RJ"
//   );
//     cy.get("#linux").check();
//     cy.get('select[name="escolaridade"').select("outros");
//     cy.get(".Aplicacao_button__tw2AE").click();
//   });
// });
