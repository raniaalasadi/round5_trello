class MoveTemplateCardToAnyListActions {

  OpenTemplateCard() {
    cy.findByTestID("card-name").click()
    return this
  }

  MoveTemplatetoList(listName) {
    cy.findByTestID("card-back-actions-button").click()
    cy.findByTestID("card-back-move-card-button").click()
    cy.findByTestID("move-card-popover-select-list-destination-select--control").click()
    cy.contains(listName).click({ force: true })
    cy.findByTestID("move-card-popover-move-button").click({ force: true })
    cy.findByTestID("CloseIcon").last().scrollIntoView().click()
    return this
  }

  }
export default MoveTemplateCardToAnyListActions
