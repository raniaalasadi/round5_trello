class MoveTemplateCardToAnyListAssertions {

  checkTemplateCardExistsInList(cardName, listName) {
    // cy.findByTestID("list-wrapper")
    //   .contains(listName)
    //   .within(() => {
    //     cy.findByTestID("card-name").contains(cardName).should("exist")
    //   })

    cy.findByTestID("list-wrapper")
      .filter(`:contains("${listName}")`)
      .first()
      .within(() => {
        cy.findByTestID("card-name")
          .contains(cardName)
          .should("exist")
      })

    return this
  }

}

export default MoveTemplateCardToAnyListAssertions
