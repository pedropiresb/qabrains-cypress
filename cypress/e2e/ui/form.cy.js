import FormPage from '../../pages/formPage'
import form from '../../fixtures/form'
//import document from '../../fixtures/document.pdf'
describe('Registration', () => {

    it.only('Form success', () => {

        cy.openPage()
        cy.goTo('Form Submission','Submit')
        FormPage.fillForm(form)
        //FormPage.addFile('document.pdf')

        //FormPage.validateToastMessage('Form submit successfully.')
        //FormPage.validateSuccessTitle('successfully submitted')
        //FormPage.validateSuccessDescription('Congratulations. You have successfully submitted user registration form')

    })

    it('Phone with less than 11 numbers'), ()=>{

    }
    it('Phone with more than 14 numbers'), ()=>{
        
    }
})