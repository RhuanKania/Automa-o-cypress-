import Login from "../support/pages/login/login";
import Contas from "../support/pages/contas/contas";

const faker = require("faker-br");

describe("Tela de contas", () => {
  it("Cenário de sucesso de adicionar conta", () => {
    cy.login("fulano@qa.com", "teste");
    Login.validarAcessoLoginSucesso();

    cy.criarContas(faker.name.firstName());
    Contas.validarCriacaoDeContas("Conta adicionada com sucesso!", false);
  });
  it("Cenário de falha adicionar conta", () => {
    cy.login("fulano@qa.com", "teste");
    Login.validarAcessoLoginSucesso();

    cy.criarContas("sanepar");
    Contas.validarCriacaoDeContas("Já existe uma conta com esse nome!", true);
  });
});
