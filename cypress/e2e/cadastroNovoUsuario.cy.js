import NovoUsuario from "../support/pages/novoUsuario/novoUsuario";

describe("Tela de cadastrar novo usuário", () => {
  it("Cenário de sucesso", () => {
    NovoUsuario.acessarCriarUsuario();
    NovoUsuario.inserirNome();
    NovoUsuario.inserirEmail();
    NovoUsuario.inserirPassword();
    NovoUsuario.clickCadastrar();
    NovoUsuario.validarCriacaoCadastro("Usuário inserido com sucesso", false);
  });

  it("Caso o usuário não adicione algum dos campos obrigatórios, receberá uma mensagem de erro", () => {
    NovoUsuario.acessarCriarUsuario();
    //NovoUsuario.inserirNome();
    NovoUsuario.inserirEmail();
    NovoUsuario.inserirPassword();
    NovoUsuario.clickCadastrar();
    NovoUsuario.validarCriacaoCadastro("Nome é um campo obrigatório", true);

    //Mensagens de erro que poderão aparecer ao cliente
    //"Nome é um campo obrigatório"
    //"Email é um campo obrigatório"
    //"Senha é um campo obrigatório"
  });
});
