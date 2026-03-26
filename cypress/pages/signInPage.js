class SignInPage {



    fillEmail(email) {
        cy.get('input[id="email"]')
            .type(email)
    }

    fillPassword(password) {
        cy.get('label[for="password"]')
            .parent()
            .find('input#password')
            .type(password)
    }

    clickSignIn() {
        cy.contains('button', 'Login', { timeout: 5000 })
            .click()
    }

    clickSignOut() {
        cy.contains('button', 'Logout', { timeout: 5000 })
            .click()
    }


      validateToastMessage(message) {
    cy.get('.toaster span')
      .should('be.visible')
      .and('have.text', message)
  }

  validateSuccessTitle(text) {
    cy.get('div.success-msg h2')
      .should('be.visible')
      .and('have.text', text)
  }

  validateSuccessDescription(text) {
    cy.get('div.success-msg p')
      .should('be.visible')
      .and('have.text', text)
  }

  validateEmptyEmail(text) {
    cy.contains('p',text)
      .should('be.visible')
      .and('have.text', text)
  }

  validateLogOut() {
    this.clickSignOut()
    cy.contains('button', 'Login', { timeout: 5000 })
        .should('be.visible')
    cy.contains('label','Email')
        .should('be.visible')
    cy.contains('label','Password')
        .should('be.visible')
  }

}
export default new SignInPage()