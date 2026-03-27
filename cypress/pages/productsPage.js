class ProductsPage {



    addProductCart(product) {
        cy.contains('div', product)
            .find('button')
                .contains('Add to cart')
                .click()
    }

    addProductCart(product) {
        cy.contains('div', product)
            .find('button')
                .contains('Add to cart')
                .click()
    }

    addProductFavorite(product) {
        cy.contains('div', product)
            .find('button svg')
                .parent()
                .click()
                .should('have.css', 'color', 'rgb(255, 0, 0)')
    }

     removeProductFavorite(product) {
        cy.contains('div', product)
            .find('button svg')
                .parent()
                .click()
                .should('have.css', 'color', 'rgb(34, 34, 34)')
    }

    removeProductCart(product) {
        cy.contains('div', product)
            .find('button')
                .contains('Remove from cart')
                .click()
    }

    validateToast(text) {
        cy.contains('div', text)
            .should('be.visible')
    }

    validateCartNumber(text) {
        cy.get('div.profile span span')
            .should('have.text',text)
    }

    goToCart() {
        cy.get('div.profile span[role="button"]')
            .click()
        cy.contains('h3', 'Your Cart')
            .should('be.visible')
          

    }

    

}
export default new ProductsPage()