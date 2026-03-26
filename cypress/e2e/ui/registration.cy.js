import SignUpPage from '../../pages/signUpPage'
import { createUser } from '../../utils/userFactory'

describe('Registration', () => {

    it('Registration success', () => {
        const user = createUser()

        cy.openPage()
        cy.goTo('Registration','Signup')
        cy.registerUser(user)

        cy.url().should('include', 'registered=true')

        SignUpPage.validateToastMessage('Registration Successful')
        SignUpPage.validateSuccessTitle('Registration Successful')
        SignUpPage.validateSuccessDescription(
            'Congratulations. You have successfully logged in. When you are done click logout below.'
        )
    })

})