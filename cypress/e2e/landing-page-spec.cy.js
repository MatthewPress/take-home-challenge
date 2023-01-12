describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display a see a header', () => {
    cy.get('Header')
      .should('be.visible')
  })
})