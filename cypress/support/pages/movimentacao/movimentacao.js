import movimentacaoElements from "./movimentacaoElements";
const faker = require("faker-br");
class Movimentacao {
  static criarMovimentacao() {
    cy.visit("/movimentacao");
  }
  static selecionarTipoMovimentacao(tipo) {
    cy.get(movimentacaoElements.selectTipo).select(tipo);
  }
  static dataMovimentacao() {
    cy.get(movimentacaoElements.inputDataMovimentacao).type("19/10/2022");
  }
  static dataPagamento() {
    cy.get(movimentacaoElements.inputDataPagamento).type("30/10/2022");
  }
  static descricaoMovimentacao() {
    cy.get(movimentacaoElements.inputDescricao).type(faker.lorem.words());
  }
  static interessadoMovimentacao() {
    cy.get(movimentacaoElements.inputInteressado).type(faker.name.firstName());
  }
  static valorMovimentacao() {
    cy.get(movimentacaoElements.inputValor).type(faker.random.number());
  }
  static selecionarContaMovimentacao(sanepar) {
    cy.get(movimentacaoElements.selectConta).select(sanepar);
  }
  static selecionarSituacao(situacao) {
    if (situacao == "pendente") {
      cy.get(movimentacaoElements.inputSituacaoPendente).check();
    } else {
      cy.get(movimentacaoElements.inputSituacaoPago).check();
    }
  }
  static clickBotaoSalvar() {
    cy.get(movimentacaoElements.buttonClickSalvar).click();
  }
  static validarMovimentacao(mensagem, falha) {
    if (falha == false) {
      cy.get(movimentacaoElements.divValidaMovimentacaoAdd).should(
        "have.text",
        mensagem
      );
    } else if (falha == true) {
      cy.get(movimentacaoElements.divValidaFalhaMovimentacaoAdd).should(
        "contain.text",
        mensagem
      );
    }
  }
}
export default Movimentacao;
