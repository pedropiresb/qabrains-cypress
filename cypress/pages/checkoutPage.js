class CheckoutPage {

    fillFirstName(name) {
        cy.contains('div', 'First Name')
            .find('input')
            .type(name)
    }

    fillLastName(name) {
        cy.contains('div', 'Last Name')
            .find('input')
            .type(name)
    }

    fillZipCode(zip) {
        cy.contains('div', 'Zip Code')
            .find('input')
            .clear()
            .type(zip)
    }

    clickContinue() {
        cy.contains('button', 'Continue')
            .click()
        cy.contains('h3', 'Checkout: Overview')
            .should('be.visible')
    }

   

    

}
export default new CheckoutPage()