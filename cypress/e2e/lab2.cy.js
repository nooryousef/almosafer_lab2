/// <reference types= "cypress" />


 Cypress.Commands.add("openURL", () =>  {
  cy.visit("https://www.almosafer.com/en");

cy.get('.cta__saudi').click();
 })

 let cities=["Dubai","Jeddah","Amman"]
 let random=Math.floor(Math.random() * cities.length)
 let randomCity=cities[random]




describe('template spec', () => {
  it('passes', () => {
    cy.openURL();
    cy.get('#uncontrolled-tab-example-tab-hotels').click();
    cy.get('[data-testid="AutoCompleteInput"]').type(randomCity)
    cy.get('[data-testid="AutoCompleteResultsList"]').find('li').eq(1).click()
    cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()
    // cy.wait(15000)
    cy.get('.loading-spinner').should('not.exist', { timeout: 10000 });
    cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]').click();
    cy.wait(15000) 
    cy.get('[data-testid="HotelSearchResult__Hotel0__PriceLabel"] > .Price__Value').invoke('text').then((text2) =>{

      const priceTwoIs = parseFloat(text2)
      cy.get('[data-testid="HotelSearchResult__Hotel39__PriceLabel"] > .Price__Value').invoke('text').then((x) =>{ 
        const y=parseFloat(x)
        expect(priceTwoIs).to.be.lessThan(y)


      })

    })


    

  })

 
})