// Example Test.
describe('My test', () => {
    it('checks something', () => {
        cy.visit('http://localhost:3000') // replace with your Next.js app's url
        cy.get('#some-element').should('exist')
    })
})