/// <reference types="cypress" />

it('clicks every button waits for the number', () => {
  cy.visit('index.html')
  cy.get('tbody button').each(($button) => {
    cy.wrap($button)
      .click()
      .parent()
      .parent()
      .contains('td', /\d/)
      .invoke('text')
      .then((s) => cy.log(`got ${s}`))
  })
})
