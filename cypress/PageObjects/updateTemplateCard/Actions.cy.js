class updateTemplateCardActions {

openTemplateBoard(boardURL) {
    cy.visit(boardURL)
    return this
  }

  openTemplateCard(cardName) {
    cy.findByTestID("card-name").click()
    return this
  }

  updateTemplateName(newName) {
    cy.findByTestID("card-back-title-input").clear().type(newName)
    cy.findByTestID("CloseIcon").click()
    return this
  }
}

export default updateTemplateCardActions
