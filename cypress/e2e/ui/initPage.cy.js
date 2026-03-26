import InitPage from '../../pages/initPage'

describe('Initial Page', ()=>{

    it('Registration success', ()=>{
        cy.visit('https://qabrains.com/practice-site')
        //cy.get('a[href="https://practice.qabrains.com"]')
            InitPage.validateLink('https://practice.qabrains.com')
    })

})