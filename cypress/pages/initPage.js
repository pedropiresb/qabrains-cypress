class InitPage {

    validateLink(link) {
        cy.contains('a', 'Start Testing Now')
            .should('have.attr', 'href', link)
    }



}
export default new InitPage()