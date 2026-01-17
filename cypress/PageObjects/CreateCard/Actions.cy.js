class createCardActions {

openBoard (boardURL){
  cy.visit(boardURL)
  return this
}

clickOnAddACardButton(){
  cy.findByTestID("list-add-card-button").first().clicks()
  return this
}

  typeCardNameInCardTitleInput(cardName){
    cy.findByTestID("list-card-composer-textarea").type(cardName)
return this
  }

clickOnAddCardButton(){
  cy.findByTestID("list-card-composer-add-card-button")
  return this
}

}

export default createCardActions
