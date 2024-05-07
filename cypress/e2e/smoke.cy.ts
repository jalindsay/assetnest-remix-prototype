describe('smoke tests', () => {
  it('can visit the homepage', () => {
    cy.visit('/')
    cy.location('pathname').should('contain', '/').wait(1000)
  })
})
