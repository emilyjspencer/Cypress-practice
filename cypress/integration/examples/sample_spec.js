import { equal } from "assert"

describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('https://example.cypress.io')
    cy.contains('type') // equivalent to has_content
  })
})

describe('My Second Test', function() {
  it('clicks the link "type"', function() {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('fake@email.com')
        .should('have.value', 'fake@email.com')
  
  })
})