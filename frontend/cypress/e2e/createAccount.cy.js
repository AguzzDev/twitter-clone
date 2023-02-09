describe("go to create account", () => {
  it("create", () => {
    cy.visit("/")
    cy.get('[data-test-id="buttonRegister2"]').click()

    cy.get('[data-test-id="form"]').within(() => {
      cy.get('[name="name"]').type("Carlos")
      cy.get('[name="email"]').type("carlos@gmail.com")
      cy.get('select[name="mes"]').select("Enero")
      cy.get('select[name="dia"]').select("1")
      cy.get('select[name="anio"]').select("2010")
      cy.get('[type="submit"]').click()
    })
  })
})
