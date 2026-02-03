class createBoardActions {

  clicksOnCreateButton() {
    cy.findByTestID("header-create-menu-button").click()
    return this
  }

  selectCreateBoardOnTheList() {
    cy.findByTestID("header-create-board-button").click()
    return this
  }

  typeBoardNameInBoardTitleField(boardName) {
    cy.findByTestID("create-board-title-input").type(boardName)
    return this
  }

  clickOnCreateButtonInTheTab() {
    cy.findByTestID("create-board-submit-button").click()
    return this
  }
}
export default createBoardActions
