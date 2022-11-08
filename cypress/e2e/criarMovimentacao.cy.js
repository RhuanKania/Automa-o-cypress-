import Login from "../support/pages/login/login";
import Movimentacao from "../support/pages/movimentacao/movimentacao";

describe("Tela de Criar de Movimentacao", () => {
  it("Cenário de sucesso", () => {
    cy.login("fulano@qa.com", "teste");
    Login.validarAcessoLoginSucesso();

    Movimentacao.criarMovimentacao();
    Movimentacao.selecionarTipoMovimentacao("Despesa");
    Movimentacao.dataMovimentacao();
    Movimentacao.dataPagamento();
    Movimentacao.descricaoMovimentacao();
    Movimentacao.interessadoMovimentacao();
    Movimentacao.valorMovimentacao();
    Movimentacao.selecionarContaMovimentacao("sanepar");
    Movimentacao.selecionarSituacao("pago");
    Movimentacao.clickBotaoSalvar();
    Movimentacao.validarMovimentacao(
      "Movimentação adicionada com sucesso!",
      false
    );
  });

  it("Se não for insertido um campo obrigatório, será acusado erro na tela", () => {
    cy.login("fulano@qa.com", "teste");
    Login.validarAcessoLoginSucesso();

    Movimentacao.criarMovimentacao();
    Movimentacao.selecionarTipoMovimentacao("Receita");
    Movimentacao.dataMovimentacao();
    Movimentacao.dataPagamento();
    Movimentacao.descricaoMovimentacao();
    //Movimentacao.interessadoMovimentacao();
    Movimentacao.valorMovimentacao();
    Movimentacao.selecionarContaMovimentacao("sanepar");
    Movimentacao.selecionarSituacao("pago");
    Movimentacao.clickBotaoSalvar();
    Movimentacao.validarMovimentacao("Interessado é obrigatório", true);
  });
});
