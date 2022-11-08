import novoUsuarioElements from "./novoUsuarioElements";
const faker = require("faker-br");

class NovoUsuario {
  static acessarCriarUsuario() {
    cy.visit("/cadastro");
  }
  static inserirNome() {
    cy.get(novoUsuarioElements.inputInserirNome).type(faker.name.findName());
  }
  static inserirEmail() {
    cy.get(novoUsuarioElements.inputInserirEmail).type(faker.internet.email());
  }
  static inserirPassword() {
    cy.get(novoUsuarioElements.inputInserirPassword).type(
      faker.internet.password()
    );
  }
  static clickCadastrar() {
    cy.get(novoUsuarioElements.inputClickCadastrar).click();
  }
  static validarCriacaoCadastro(mensagem, falha) {
    if (falha == false) {
      cy.get(novoUsuarioElements.divValidarSucessoCadastro).should(
        "have.text",
        mensagem
      );
    } else if (falha == true) {
      cy.get(novoUsuarioElements.divValidarFalhaCadastro).should(
        "have.text",
        mensagem
      );
    }
  }
}

export default NovoUsuario;
