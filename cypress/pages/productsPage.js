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
                .click()
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

    

}
export default new ProductsPage()