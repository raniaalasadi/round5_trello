class CreateCardTemplateActions {

  openTemplateBoard(boardURL) {
    cy.visit(boardURL)
    return this
  }

  openExistingCard(cardName) {
    cy.findByTestID("card-name").click()
    return this
  }

  makeCardAsATemplate() {
    cy.findByTestID("card-back-actions-button").click()
    cy.findByTestID("card-back-make-template-button").click()
    cy.wait(3000)
    return this
  }

}
export default CreateCardTemplateActions
