class createCardActions {

  openBoard (boardURL){
    cy.visit(boardURL)
    return this
  }

  clickOnAddACardButton(){
    cy.findByTestID("list-add-card-button").first().click()
    return this
  }

  typeCardNameInCardTitleInput(cardName){
    cy.findByTestID("list-card-composer-textarea").type(cardName)
    return this
  }

  clickOnAddCardButton(){
    cy.findByTestID("list-card-composer-add-card-button").click()
    return this
  }

}

export default createCardActions
