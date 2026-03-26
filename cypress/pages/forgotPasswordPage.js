class ForgotPasswordPage {



  fillEmail(email) {
    cy.get('input[id="email"]')
      .type(email)
    //.should('have.value', email)
  }




  clickReset() {
    cy.contains('button', 'Reset Password', { timeout: 5000 })
      .click()
  }




  validateToastMessage(message) {
    cy.get('.toaster span')
      .should('be.visible')
      .and('have.text', message)
  }

  validateTitle(text) {
    cy.get('div.success-msg h2')
      .should('be.visible')
      .and('have.text', text)
  }

  validateDescription(email) {
    cy.get('div.success-msg p')
      .should('be.visible')
      .and('have.text', 'Password has been sent to ' + email)
  }

  validateEmptyEmail(text) {
    cy.contains('p', text)
      .should('be.visible')
      .and('have.text', text)
  }

  fillComments(text) {
    cy.contains('div', 'Leave Feedback')
      .find('textarea')
      .type(text)
    //.should('have.value', email)
  }

  clickSubmit(){
    cy.contains('button','Submit')
      .click()
  }

  validateCancelNotVisible(){
    cy.contains('button','Cancel')
      .should('not.exist')
  }
  validateCancelIsVisible(){
    cy.contains('button','Cancel')
      .should('be.visible')
  }
  validateDialogIsVisible(){
    cy.get('div[role="dialog"]')
      .should('be.visible')
    cy.contains('p', 'Sign in to share your thoughts with the Global QA Community.')
      .should('be.visible')
  }

}
export default new ForgotPasswordPage()