// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('loginToTrello', () => {
  cy.visit('/login')
  cy.wait(3000)
  cy.fixture("trelloUser").then((data) => {
    cy.findByTestID("username").type(data.email)
    cy.findByTestID("login-submit-idf-testid").click()
    cy.wait(2000)
    cy.findByTestID("password").type(data.password)
    cy.findByTestID("login-submit-idf-testid").click()
    cy.wait(6000)
  })
})


Cypress.Commands.add('findByTestID', (dataTestId) => {
  cy.get(`[data-testid="${dataTestId}"]`);
});





