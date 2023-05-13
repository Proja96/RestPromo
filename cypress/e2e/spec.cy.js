describe('Navigation Links', () => {
  it('navigate to correct section when clicked', () => {
    cy.visit('http://localhost:5500')

    cy.get('#navbar a, .book-a-table-btn').each(($link) => {
      const href = $link.prop('href')
      const hash = new URL(href).hash

      cy.wrap($link).should('be.visible').click()

      if (hash) {

        cy.get(hash).should('be.visible')

        cy.scrollTo('top')
      }
    })
  })
})

describe('Mobile Navigation', () => {
  it('toggles correctly', () => {
    cy.viewport('iphone-xr')

    cy.visit('http://localhost:5500')

    cy.get('.mobile-nav-toggle').click()
    cy.get('#navbar').should('have.class', 'navbar-mobile')

    cy.get('.mobile-nav-toggle').click()
    cy.get('#navbar').should('not.have.class', 'navbar-mobile')
  })
})
