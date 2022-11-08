import loginElements from "./loginElements";
class Login {
  static acessarLogin() {
    cy.visit("/login");
  }
  static inserirEmail(email) {
    cy.get(loginElements.inputEmail).type(email);
  }
  static validarEmail(email) {
    cy.get(loginElements.inputEmail).should("have.value", email);
  }
  static inserirSenha(senha) {
    cy.get(loginElements.inputSenha).type(senha);
  }
  static validarSenha(senha) {
    cy.get(loginElements.inputSenha).should("have.value", senha);
  }
  static clickBotaoLogin() {
    cy.get(loginElements.buttonClickLogin).click();
  }
  static validarAcessoLoginSucesso() {
    cy.get(loginElements.divNotificacaoSucesso).should(
      "have.text",
      "Bem vindo, Teste João!"
    );
  }
  static validarCenarioFalha() {
    cy.get(loginElements.divValidaCenarioFalha).should(
      "have.text",
      "Problemas com o login do usuário"
    );
  }
}
export default Login;
