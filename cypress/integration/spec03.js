/// <reference types="cypress" />

it('cy.each stops iteration when returning false', () => {
  const fruits = ['apples', 'bananas', 'oranges', 'pears']
  cy.wrap(fruits).each((fruit, k) => {
    console.log(k, fruit)
    if (k === 2) {
      return false
    }
    cy.log('fruit', fruit)
  })
})

it.skip('stops when it sees 7 (wrong)', () => {
  // this does not stop the iteration
  cy.visit('index.html')
  cy.get('tbody button').each(($button, k) => {
    console.log('button', k)
    cy.wrap($button)
      .click()
      .parent()
      .parent()
      .contains('td', /\d/)
      .invoke('text')
      .then(Number)
      .then((n) => {
        return n === 7 ? false : true
      })
  })
})
