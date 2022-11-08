import contasElements from "./contasElements";
class Contas {
  static acessarContas() {
    cy.visit("/addConta");
  }
  static inserirNome(nome) {
    cy.get(contasElements.inputNome).type(nome);
  }
  static validarNome(nome) {
    cy.get(contasElements.validarNome).should("have.value", nome);
  }
  static clickBotaoSalvar() {
    cy.get(contasElements.buttonClickSalvar).click();
  }
  static validarCriacaoDeContas(mensagem, falha) {
    if (falha == false) {
      cy.get(contasElements.divNotificacaoSucessoContas).should(
        "have.text",
        mensagem
      );
    } else if (falha == true) {
      cy.get(contasElements.divValidaCenarioFalhaContas).should(
        "have.text",
        mensagem
      );
    }
  }
}
export default Contas;
