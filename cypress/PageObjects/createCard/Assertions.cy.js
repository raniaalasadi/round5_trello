class createCardAssertions {

  checkCardTitleIsContain(cardName){
    cy.findByTestID("card-name").should("contain", cardName)
  return this
}}

export default createCardAssertions
