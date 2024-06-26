import 'cypress-xpath';

describe('test', () => {
    it("Demo", () => {

        cy.visit("https://www.bstackdemo.com")
        cy.contains("Sign In")
        cy.contains("Sign In").click()
        cy.url().should('include', '/signin')
        cy.contains('Select Username').should('be.visible').click();
        cy.get('#react-select-2-input').type("demouser\n")
        // cy.get('#react-select-2-input')
        // .should('have.value','demouser'); 
        // // cy.contains('demouser').click()
        // // cy.contains('Select Password').click()
        // // cy.contains('Login').click();
        cy.contains('Select Password').click();
        cy.get('#react-select-3-input').type('testingisfun99\n');
        cy.get('#login-btn').click()
        cy.xpath("//*[@id='1']/div[4]").should('be.visible').click();
        cy.contains('Checkout').should('be.visible').click()
        cy.get('#firstNameInput').should('be.visible').click().type('Parth')
        cy.get('#lastNameInput').type('Barai')
        cy.get('#addressLine1Input').type('Borivali')
        cy.get('#provinceInput').type('Maharashtra')
        cy.get('#postCodeInput').type('400092')
        cy.get('#checkout-shipping-continue').click()
        cy.get('#confirmation-message').should('have.text', 'Your Order has been successfully placed.')
        cy.end()

        //   cy.visit("https://bstackdemo.com/");
        //   cy.contains('Sign In').click();
        //   cy.contains('Select Username').should('be.visible').click();
        //   cy.get('#react-select-2-input').type('fav_user\n')
        //   cy.contains('Select Password').click();
        //   cy.get('#react-select-3-input').type('testingisfun99\n');
        //   cy.get('#login-btn').click()

    })
})