/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-recurse
import { each } from 'cypress-recurse'

Cypress.Commands.overwrite(
  'each',
  (originalFn, items, itemCallback, stopPredicate) => {
    return each(itemCallback, stopPredicate)(items)
  },
)

it('overwrites cy.each to find 7 and stop', () => {
  cy.visit('index.html')

  cy.get('tbody button').each(
    ($button) => {
      return cy
        .wrap($button)
        .click()
        .parent()
        .parent()
        .contains('td', /\d/)
        .invoke('text')
        .then(Number)
    },
    (n) => n === 7,
  )
})
