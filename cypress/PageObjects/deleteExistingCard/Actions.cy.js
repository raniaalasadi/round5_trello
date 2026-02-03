class DeleteCardActions {

  openBoard(boardURL) {
    cy.visit(boardURL)
    return this
  }

  openCard(cardName) {
    cy.findByTestID("card-name").click()
    return this
  }

  archiveCard() {
    cy.findByTestID("card-back-actions-button").click()
    cy.findByTestID("card-back-archive-button").click()
    return this
  }

  deleteCard() {
    cy.findByTestID("card-back-delete-card-button").click()
    return this
  }

  confirmDeleteCard() {
    cy.findByTestID("popover-confirm-button").click()
    return this
  }

}

export default DeleteCardActions
