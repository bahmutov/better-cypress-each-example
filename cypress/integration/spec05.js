/// <reference types="cypress" />

import { each } from 'cypress-recurse'

it('stops when it sees 7 using each from cypress-recurse', () => {
  cy.visit('index.html')

  cy.get('tbody button').then(
    each(
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
    ),
  )
})
