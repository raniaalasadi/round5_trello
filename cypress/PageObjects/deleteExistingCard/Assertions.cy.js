class DeleteCardAssertions {

  checkThatTheCardIsNotExistFromTheList() {
    cy.findByTestID("card-name").should('not.exist')
    return this
  }
}

export default DeleteCardAssertions
