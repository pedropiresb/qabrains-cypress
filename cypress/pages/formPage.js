class FormPage{


    fillName(text){
        cy.get('input#name')
            .type(text)
    }

    fillEmail(text){
        cy.get('input#email')
            .type(text)
    }
    fillPhone(text){
        cy.get('input#contact')
            .type(text)
    }
    fillDate(text){
        cy.get('input#date')
            .type(text)
    }

    addFile(file){
        cy.get('input#file')
            .selectFile('./cypress/fixtures/'+file)
    }

    selectColor(text){
        cy.contains('label',text)
            .find('input')
            .click()
    }

    selectFood(foods){
    //const food = ['Pasta', 'Pizza', 'Burger', 'Sandwich']
        foods.forEach((item)=>{
            cy.contains('label',item)
            .find('input')
            .click()
        })
    }

    selectCountry(country) {
        cy.get('select[id="country"]')
            .select(country)
    }

    submitForm() {
        cy.contains('button', 'Submit')
            .click()
    }

    fillForm(form){
        this.fillName(form.name)
        this.fillEmail(form.email)
        this.fillPhone(form.phone)
        this.fillDate(form.date)
        this.selectColor(form.color)
        this.selectFood(form.foods)
        this.selectCountry(form.country)
        this.addFile(form.file)
    }

    validateToastMessage(message) {
    cy.get('.toaster span')
      .should('be.visible')
      .and('have.text', message)
  }

  validateSuccessTitle(text) {
    cy.get('div.success-msg h2')
      .should('be.visible')
      .and('have.text', text)
  }

  validateSuccessDescription(text) {
    cy.get('div.success-msg p')
      .should('be.visible')
      .and('have.text', text)
  }

}
export default new FormPage()