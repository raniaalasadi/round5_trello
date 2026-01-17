class createBoardActions {

  clicksOnCreateButton() {
    cy.findByTestId("header-create-menu-button").click()
    return this
  }

  selectCreateBoardOnTheList() {
    cy.findByTestId("header-create-board-button").click()
    return this
  }

  typeBoardNameInBoardTitleField(boardName) {
    cy.findByTestId("create-board-title-input").type(boardName)
    return this
  }

  clickOnCreateButtonInTheTab() {
    cy.findByTestId("create-board-submit-button").click()
    return this
  }
}
export default createBoardActions
