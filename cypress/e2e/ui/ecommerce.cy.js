import SignInPage from '../../pages/signInPage'
import user from '../../fixtures/user'
import ProductsPage from '../../pages/productsPage'
import CartPage from '../../pages/cartPage'
import CheckoutPage from '../../pages/checkoutPage'
import CheckoutOverviewPage from '../../pages/checkoutOverviewPage'

describe('Products List validation', () => {

    beforeEach(() => {
        cy.openPage()
        cy.goTo('E-Commerce Site', 'View Test Case')

        cy.contains('a', 'Visit Demo Site')
            .should('be.visible')
            .click()

        SignInPage.fillEmail('test@qabrains.com')
        SignInPage.fillPassword('Password123')
        SignInPage.clickSignIn()
    })

    it('Toast is displayed after adding to cart', () => {

        ProductsPage.addProductCart('Sample Shoe Name')
        ProductsPage.validateToast('Added to cart')

    })

    it('Toast is displayed after removing from to cart', () => {

        ProductsPage.addProductCart('Sample Shoe Name')
        ProductsPage.removeProductCart('Sample Shoe Name')
        ProductsPage.validateToast('Removed from cart')

    })

    it('Validate number of items in the cart Icon', () => {

        ProductsPage.addProductCart('Sample Shoe Name')
        ProductsPage.validateCartNumber('1')
        ProductsPage.addProductCart('Sample Shirt Name')
        ProductsPage.validateCartNumber('2')
        ProductsPage.removeProductCart('Sample Shoe Name')
        ProductsPage.validateCartNumber('1')
    })

    it('Toast is displayed after adding to favorite', () => {

        ProductsPage.addProductFavorite('Sample Shoe Name')
        ProductsPage.validateToast('Added to favorites')

    })

    it('Toast is displayed after removing from favorite', () => {

        ProductsPage.addProductFavorite('Sample Shoe Name')
        ProductsPage.validateToast('Added to favorites')
        ProductsPage.removeProductFavorite('Sample Shoe Name')
        ProductsPage.validateToast('Removed from favorites')

    })
})

describe.only('Checkout Page', () => {
    beforeEach(() => {
        cy.openPage()
        cy.goTo('E-Commerce Site', 'View Test Case')

        cy.contains('a', 'Visit Demo Site')
            .should('be.visible')
            .click()

        SignInPage.fillEmail('test@qabrains.com')
        SignInPage.fillPassword('Password123')
        SignInPage.clickSignIn()
    })

    it('Validate checkout', () => {

        ProductsPage.addProductCart('Sample Shoe Name')
        //ProductsPage.validateCartNumber('1')
        ProductsPage.addProductCart('Sample Shirt Name')
        //roductsPage.validateCartNumber('2')
        ProductsPage.goToCart()
        CartPage.goToCheckout()
        CheckoutPage.fillFirstName('Pedro')
        CheckoutPage.fillLastName('Pires')
        CheckoutPage.fillZipCode('51021030')
        CheckoutPage.clickContinue()
        CheckoutOverviewPage.clickFinish()
        CheckoutOverviewPage.validateSuccessTitle('Thank you for your order!')
        CheckoutOverviewPage.validateSuccessDescription('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })

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