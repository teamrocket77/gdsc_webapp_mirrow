describe('Nav Bar Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.log('Visiting base page')

    cy.get('[data-cy = "nav-bar-option-About"').click()

    cy.location('pathname').should('eq', '/about');
    cy.log('Visiting about page')

    cy.get('[data-cy = "nav-bar-option-Socials"').click()

    cy.location('pathname').should('eq', '/socials');
    cy.log('Visiting base page')


    cy.get('[data-cy = "nav-bar-option-Our Team"').click()

    cy.location('pathname').should('eq', '/team');
    cy.log('Visiting team page')

  })
})

