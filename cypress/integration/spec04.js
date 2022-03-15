/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-command-chain
import 'cypress-command-chain'

it('stops when it sees 7', () => {
  cy.visit('index.html')
  let shouldStop = false
  cy.get('tbody button').each(($button, k) => {
    cy.then(() => {
      if (shouldStop) {
        return
      }
      console.log('button', k)
      cy.wrap($button)
        .click()
        .parent()
        .parent()
        .contains('td', /\d/)
        .invoke('text')
        .then(Number)
        .then((n) => {
          if (n === 7) {
            shouldStop = true
          }
        })
    })
  })
})
