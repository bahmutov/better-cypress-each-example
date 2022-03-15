/// <reference types="cypress" />

it('clicks every button', () => {
  cy.visit('index.html')
  cy.get('tbody button').each(($button) => {
    cy.wrap($button).click()
  })
})
