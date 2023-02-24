describe('go index page', () => {
  it('is load correctly?', () => {
    cy.visit('/')
    cy.contains('Lo que esta pasando ahora')
  })
})
