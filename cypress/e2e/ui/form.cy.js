import FormPage from '../../pages/formPage'
import form from '../../fixtures/form'
//import document from '../../fixtures/document.pdf'
describe('Registration', () => {

    it.only('Form success', () => {

        cy.openPage()
        cy.goTo('Form Submission','Submit')
        FormPage.fillForm(form)
        FormPage.submitForm()
        //FormPage.addFile('document.pdf')

        FormPage.validateToastMessage('Form submit successfully.')
        FormPage.validateSuccessTitle('successfully submitted')
        FormPage.validateSuccessDescription('Congratulations. You have successfully submitted user registration form')

    })

    it('Phone with less than 11 numbers'), ()=>{

    }
    it('Phone with more than 14 numbers'), ()=>{
        
    }
}) 


/*
Add to Cart & Remove Items

Verify items can be added to cart.

Verify quantity updates correctly.

Verify items can be removed.


Favorites / Wishlist Functionality

Verify products can be added/removed from favorites.

Ensure favorites persist after page reload/login.


Sorting & Filtering Products

Verify sorting by price (Low → High, High → Low).

Verify sorting by newest arrivals.

Verify filters (category, price range, brand).


Checkout Flow

Verify user can proceed to checkout.

Validate shipping & billing information input.

Verify order summary before payment.

Validate order confirmation after purchase.*/