class CartPage {



    goToCheckout() {
        cy.contains('button', 'Checkout')
            .click()
        cy.contains('h3', 'Checkout: Your Information')
            .should('be.visible')
    }

   

    

}
export default new CartPage()