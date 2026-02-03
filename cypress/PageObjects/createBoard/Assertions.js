class createBoardAssertions {

  checkBoardNameIsEqual(boardName) {
    cy.findByTestID("board-name-display").should("contain",boardName)
    return this
  }

  checkURLIsContain(boardName) {
    cy.url().should("contain",boardName)
    return this
  }
}

export default createBoardAssertions
