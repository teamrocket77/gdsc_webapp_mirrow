describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-cy = "nav-bar-option-About"').click()

    cy.location('pathname').should('eq', '/about')

    cy.get('[data-cy = "nav-bar-option-Socials"').click()

    cy.location('pathname').should('eq', '/socials')


    cy.get('[data-cy = "nav-bar-option-Our Team"').click()

    cy.location('pathname').should('eq', '/team')

    cy.get('[data-cy = "nav-bar-option-Our Team"').click()

    cy.location('pathname').should('eq', '/team')
  })
})
