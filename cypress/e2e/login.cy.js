import Login from "../support/pages/login/login";
describe("Tela de login", () => {
  it("Cenário de sucesso", () => {
    cy.login("fulano@qa.com", "teste");
    Login.validarAcessoLoginSucesso();
  });
  it("Ao usar uma senha errada, o login deve acusar erro", () => {
    cy.login("fulano@qa.com", "test");
    Login.validarCenarioFalha();
  });
});
