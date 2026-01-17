class createBoardAssertions {
  checkBoardNameIsEqual(boardName) {
    cy.findByTestId("board-name-display").should("have.value",boardName)
    return this
  }

  checkURLIsContain(boardName) {
    cy.url().should("contain",boardName)
    return this
  }
}

export default createBoardAssertions
