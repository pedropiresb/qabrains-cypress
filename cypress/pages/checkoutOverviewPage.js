class CheckoutOverviewPage {

   
    clickFinish() {
        cy.contains('button', 'Finish')
            .click()
        cy.contains('h3', 'Checkout: Complete!')
            .should('be.visible')
    }

     validateSuccessTitle(text) {
    cy.contains('h3',text)
      .should('be.visible')
      .and('have.text', text)
  }

  validateSuccessDescription(text) {
    cy.contains('p',text)
      .should('be.visible')
      .and('have.text', text)
  }

   

    

}
export default new CheckoutOverviewPage()