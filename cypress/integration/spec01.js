/// <reference types="cypress" />

it('clicks every button', () => {
  cy.visit('index.html')
  // https://on.cypress.io/each
  cy.get('tbody button').each(($button) => {
    cy.wrap($button).click()
  })
})
