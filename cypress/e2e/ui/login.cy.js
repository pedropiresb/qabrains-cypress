import SignInPage from '../../pages/signInPage'
import user from '../../fixtures/user'

describe('Login cases', () => {

    it('login success', () => {

        cy.openPage()
        //cy.goToRegistration()
        SignInPage.fillEmail(user.email)
        SignInPage.fillPassword(user.password)
        SignInPage.clickSignIn()
        cy.url().should('include', 'logged=true')

        SignInPage.validateToastMessage('Login Successful')
        SignInPage.validateSuccessTitle('Login Successful')
        SignInPage.validateSuccessDescription(
            'Congratulations. You have successfully logged in. When you are done click logout below.'
        )
    })

    it('Wrong Email', () => {

        cy.openPage()
        //cy.goToRegistration()
        SignInPage.fillEmail('pedro@email.com')
        SignInPage.fillPassword(user.password)
        SignInPage.clickSignIn()
        cy.url().should('include', 'email=false')

        SignInPage.validateToastMessage('Your email is invalid!')

    })

    it('Wrong Password', () => {

        cy.openPage()
        //cy.goToRegistration()
        SignInPage.fillEmail(user.email)
        SignInPage.fillPassword('123456')
        SignInPage.clickSignIn()
        cy.url().should('include', 'password=false')

        SignInPage.validateToastMessage('Your password is invalid!')

    })

    it('Wrong Email and Password', () => {

        cy.openPage()
        SignInPage.fillEmail('pedro@email.com')
        SignInPage.fillPassword("123456")
        SignInPage.clickSignIn()
        cy.url().should('include', 'email=false&password=false')
        SignInPage.validateToastMessage('Your email and password both are invalid!')

    })

    it('Empty Email and Password', () => {

        cy.openPage()
        SignInPage.clickSignIn()
        SignInPage.validateEmptyEmail('Email is a required field')

    })

    it('Logout', () => {

        cy.openPage()
        SignInPage.fillEmail(user.email)
        SignInPage.fillPassword(user.password)
        SignInPage.clickSignIn()
        SignInPage.validateLogOut()

    })

})