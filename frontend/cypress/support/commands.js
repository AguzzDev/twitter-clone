Cypress.Commands.add('login', ({ usernameOrEmail, password }) => {
  cy.request('POST', 'http://localhost:5000/users/login', {
    usernameOrEmail,
    password
  }).then((res) => {
    if (res.status === 200) {
      localStorage.setItem('profile', JSON.stringify(res.body))
    }
  })
})
