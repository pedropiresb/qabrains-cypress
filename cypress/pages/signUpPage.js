class SignUpPage {

    fillName(name) {
        cy.get('input#name')
            .type(name)
    }

    selectCountry(country) {
        cy.get('select[id="country"]')
            .select(country)
    }

    selectAccount(account) {
        cy.get('select[id="account"]')
            .select(account)
    }

    fillEmail(email) {
        cy.get('input[id="email"]')
            .type(email)
    }

    fillPassword(password) {
        cy.get('label[for="password"]')
            .parent()
            .find('input#password')
            .type(password)

        cy.get('label[for="confirm_password"]')
            .parent()
            .find('input#confirm_password')
            .type(password)
    }

    clickSignUp() {
        cy.contains('button', 'Signup', { timeout: 5000 })
            .click()
    }

    fillForm(user) {
        this.fillName(user.name)
        this.selectCountry(user.country)
        this.selectAccount(user.account)
        this.fillEmail(user.email)
        this.fillPassword(user.password)
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

}
export default new SignUpPage()