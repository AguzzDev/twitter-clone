describe('Login on Twitter', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('login account', () => {
    cy.contains('Inicia sesión').click()
    cy.login({ usernameOrEmail: 'AguzzDev', password: 'asdasdasd' })
  })
})
