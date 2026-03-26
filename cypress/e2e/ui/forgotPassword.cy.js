import ForgotPasswordPage from '../../pages/forgotPasswordPage'
import user from '../../fixtures/user'
import forgotPasswordPage from '../../pages/forgotPasswordPage'

describe('Forgot Password cases', () => {

    it('Forgot success', () => {

        cy.openPage()
        cy.goTo('Forgot Password', 'Reset Password')

        ForgotPasswordPage.fillEmail(user.email)
        ForgotPasswordPage.clickReset()
        cy.url().should('include', 'forgot=true')

        ForgotPasswordPage.validateToastMessage('Password is reset successfully.')
        ForgotPasswordPage.validateTitle('Check Email')
        ForgotPasswordPage.validateDescription(user.email)
    })



    it('Empty Email', () => {

        cy.openPage()
        cy.goTo('Forgot Password', 'Reset Password')
        ForgotPasswordPage.clickReset()
        ForgotPasswordPage.validateEmptyEmail('Email is a required field')

    })

    it('Submit feedback', () => {

        cy.openPage()
        ForgotPasswordPage.validateCancelNotVisible()
        ForgotPasswordPage.fillComments('texto de exemplo')
        ForgotPasswordPage.validateCancelIsVisible()
        ForgotPasswordPage.clickSubmit()
        forgotPasswordPage.validateDialogIsVisible()
    })

})