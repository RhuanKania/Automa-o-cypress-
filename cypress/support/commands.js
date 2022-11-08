// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import Login from "../support/pages/login/login";
Cypress.Commands.add("login", (email, senha) => {
  Login.acessarLogin();
  Login.inserirEmail(email);
  Login.validarEmail(email);
  Login.inserirSenha(senha);
  Login.validarSenha(senha);
  Login.clickBotaoLogin();
});

import Contas from "../support/pages/contas/contas";
Cypress.Commands.add("criarContas", (nome) => {
  Contas.acessarContas();
  Contas.inserirNome(nome);
  Contas.validarNome(nome);
  Contas.clickBotaoSalvar();
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
